var camButton = document.getElementById("camInButton");
var imgButton = document.getElementById("imgInButton");
var phoneButton = document.getElementById("phoneInButton");
var saveButton = document.getElementById("saveButton");
var loadButton = document.getElementById("loadButton");
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modalImg");
var modalQr = document.getElementById("modalQr");
var closeButton = document.getElementById("closeButton");
var closeButtonImg = document.getElementById("closeButtonImg");
var closeButtonQr = document.getElementById("closeButtonQr");
var closeButtonSelect = document.getElementById("closeButtonSelect");
var closeButtonLoad = document.getElementById("closeButtonLoad");
var fileInput = document.getElementById("fileInput");
var imgInput = document.getElementById("imgInput");
var selectorCam = document.getElementById('selectorCam');
var saveLevel = document.getElementById('saveLevel');
var loadLevel = document.getElementById('loadLevel');
var videoSelect = document.getElementById('videoSource');
var levelSelector = document.getElementById('levelSelector');
var w = window.innerWidth;
var h = window.innerHeight;
var jsonImg;

drawLoadingScreen();

camButton.onclick = function() {
	// Ask the user which camera to use (only for the first scan)
	if (videoSelect.value == "") {
		selectorCam.style.display = "flex";
	// If the camera is already chosen, start the scan
	} else {
		modal.style.display = "flex";
		TopCodes.startVideoScan("video-canvas");
		selectorCam.style.display = "none";
	}
}

// Close the camera selector and start the scan
videoSelect.oninput = function() {
	modal.style.display = "flex";
	TopCodes.startVideoScan("video-canvas");
	selectorCam.style.display = "none";
}


fileInput.oninput = function() {
  // Display the image scanner canvas
  modalImg.style.display = "flex";

  // Print the image on the canvas and get the codes
  var imageLoader = document.getElementById('fileInput');
  imageLoader.addEventListener('change', handleImage, false);
  var canvas = document.getElementById('image-canvas');
  var ctx = canvas.getContext('2d');

  function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
      var img = new Image();
      img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        jsonImg = scanCanvas(img);
      }
      img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
  }
}


// Display the QR Code
phoneButton.onclick = function() {
	modalQr.style.display = "flex";
	makeCode();
}

/*saveButton.onclick = function () {
	saveLevel.style.display = "flex";
}*/

loadButton.onclick = function () {
	loadLevel.style.display = "flex";

	var levels = JSON.parse(window.localStorage.getItem("savedLevels"));

	levelSelector.innerHTML = '<option value="" selected disabled hidden>Sélectionnez le niveau</option>';

	levels.forEach(e => {
		const option = document.createElement('option');
		option.value = JSON.stringify(e.program);
		option.text = e.name + " | " + e.level;
		levelSelector.appendChild(option);
	});
}


closeButtonImg.onclick = function() {
	modalImg.style.display = "none";

	drawLoadingScreen();
}

closeButton.onclick = function() {
	modal.style.display = "none";
	TopCodes.stopVideoScan('video-canvas');
}

closeButtonQr.onclick = function() {
	modalQr.style.display = "none";
}

closeButtonSelect.onclick = function() {
	selectorCam.style.display = "none";
}

closeButtonSave.onclick = function() {
	saveLevel.style.display = "none";
}

closeButtonLoad.onclick = function() {
	loadLevel.style.display = "none";
}


// Close the scanner and scan the codes then send it to the iframe
document.getElementById("scanButtonImg").onclick = function(){
	var json = JSON.parse(jsonImg);
  	scan(json.topcodes, true);  
  	document.getElementById("modalImg").style.display = "none";

	drawLoadingScreen();
}


// Change the position of the side button when scrolling
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
		document.getElementById("inputMethod").style.position = "fixed";
		document.getElementById("inputMethod").style.top = "0";
	} else {
		document.getElementById("inputMethod").style.position = "absolute";
		document.getElementById("inputMethod").style.top = "auto";
	}
}


// draw a loading screen on the image canvas
function drawLoadingScreen() {
	var canvas = document.getElementById('image-canvas');
	var ctx = canvas.getContext('2d');
  
	var imageLoad = new Image();
	imageLoad.src = "img/loading.png";
  
	canvas.width = 1280;
	canvas.height = 720;

	imageLoad.onload = function () {
		ctx.drawImage(imageLoad, 0, 0);
	}
}