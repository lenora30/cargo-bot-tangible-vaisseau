
var videoSelect = document.getElementById('videoSource');
var saveLevel = document.getElementById('saveLevel');
var loadLevel = document.getElementById('loadLevel');
var saveNameInput = document.getElementById('saveNameInput');
var okButtonSave = document.getElementById('okButtonSave');
var okButtonLoad = document.getElementById('okButtonLoad');
var deleteSave = document.getElementById('deleteSave');
var levelSelector = document.getElementById('levelSelector');
var qrcode = new QRCode("qrcode", {width: 500, height: 500});
var peer = new SimplePeer({
	initiator: false,
	config: {'iceServers': [
		{ urls: 'stun:stun.l.google.com:19302' },
		{urls: 'stun:global.stun.twilio.com:3478?transport=udp'},
		{ urls: 'turn:cargobot-tangible.u-strasbg.fr', username: 'azertyuiop', credential: 'azertyuiop' }
	]}
}); 
var currentProgram = null;


/**
 * Send the instructions to the cargo-bot iframe
 * @param {array} tab The final array with for each instruction : his code, his function, his index in the function
 */
function send(tab) {
	console.log(tab);
	var array = tab;
	var hash = btoa(JSON.stringify(array));
	var frame = document.getElementById("frame");
	frame.src = "cargo-not/index.html#" + hash;
	frame.contentWindow.location.reload(true);
}


// register a callback function with the TopCode library
TopCodes.setVideoFrameCallback("video-canvas", function (jsonString) {

    // convert the JSON string to an object
    var json = JSON.parse(jsonString);

    // get the list of topcodes from the JSON object
    topcodes = json.topcodes;

    for (i = 0; i < topcodes.length; i++) {
		// Draw the instructions on the scanner
        if (topcodes[i].code >= 103 && topcodes[i].code <= 143) {
            var image = new Image();
            image.src = "img/instruction/" + topcodes[i].code.toString() + ".svg";
            ctx.translate(topcodes[i].x, topcodes[i].y);
            ctx.drawImage(image, -topcodes[i].radius * 1.5, -topcodes[i].radius * 1.5, topcodes[i].radius * 3, topcodes[i].radius * 3);
            ctx.translate(-topcodes[i].x, -topcodes[i].y);
        }
        if (topcodes[i].code >= 157 && topcodes[i].code <= 181) {
            var image = new Image();
            image.src = "img/instruction/" + topcodes[i].code.toString() + ".svg";
            ctx.translate(topcodes[i].x, topcodes[i].y);
            ctx.drawImage(image, -topcodes[i].radius * 3, -topcodes[i].radius * 1.5, topcodes[i].radius * 4.5, topcodes[i].radius * 2.25);
            ctx.translate(-topcodes[i].x, -topcodes[i].y);
        }
    }

    document.getElementById("scanButton").onclick = function () {
        scan(json.topcodes, true);
        TopCodes.stopVideoScan('video-canvas');
        document.getElementById("modal").style.display = "none";
    }
});

var canvas = document.querySelector("#video-canvas");
var ctx = canvas.getContext('2d');



function getDevices() {
	// AFAICT in Safari this only gets default devices until gUM is called :/
	return navigator.mediaDevices.enumerateDevices();
}
  
function gotDevices(deviceInfos) {
	window.deviceInfos = deviceInfos; // make available to console
	for (const deviceInfo of deviceInfos) {
		const option = document.createElement('option');
		option.value = deviceInfo.deviceId;
		if (deviceInfo.kind === 'videoinput') {
			option.text = deviceInfo.label || `Camera ${videoSelect.length + 1}`;
			videoSelect.appendChild(option);
		}
	}
}

// enumerate camera devices
getDevices().then(gotDevices);


// Generate the QR code with the URL of the mobile page and the peerID of the computer
function makeCode () {
	var peerId = peer.id;
	console.log(peer);
	var address = "https://lenora30.github.io/cargo-bot-tangible-vaisseau/mobile.html";
	// var address = window.location.origin + "/mobile.html";
	var qr = address + "#" + peerId; 
	qrcode.makeCode(qr);
}


// handle incoming data from phone
peer.on('connection', function(conn) {
	modalQr.style.display = "none";

  	var canvas = document.getElementById('image-canvas');
  	var ctx = canvas.getContext('2d');

	// Display and scan incoming images from the phone
  	conn.on('data', data => {
    	modalImg.style.display = "flex";

		if (data.filetype.includes('image')) {
			var bytes = new Uint8Array(data.file);
			var img = new Image();
			img.src = 'data:image/png;base64,' + encode(bytes);
			img.onload = function(){
				canvas.width = img.width;
				canvas.height = img.height;
				jsonImg = scanCanvas(img);
			}
		}
	});
});

const encode = input => {
	const keyStr =
	  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	let output = ''
	let chr1, chr2, chr3, enc1, enc2, enc3, enc4
	let i = 0
  
	while (i < input.length) {
		chr1 = input[i++]
		chr2 = i < input.length ? input[i++] : Number.NaN // Not sure if the index
		chr3 = i < input.length ? input[i++] : Number.NaN // checks are needed here
	
		enc1 = chr1 >> 2
		enc2 = ((chr1 & 3) << 4) | (chr2 >> 4)
		enc3 = ((chr2 & 15) << 2) | (chr3 >> 6)
		enc4 = chr3 & 63
	
		if (isNaN(chr2)) {
			enc3 = enc4 = 64
		} else if (isNaN(chr3)) {
			enc4 = 64
		}
		output +=
			keyStr.charAt(enc1) +
			keyStr.charAt(enc2) +
			keyStr.charAt(enc3) +
			keyStr.charAt(enc4)
	}
	return output
}


/**
 * save the program in the local storage
 * @param {srting} name name of the save
 * @param {array} program array of the program to send to the cargo-bot
 */
function save(name, program) {
	// 2D array with the level pack index in the first index and the level index in the second
	var levelArray = JSON.parse(window.sessionStorage.getItem("level"));
	// the number of the level
	var levelNum = levelArray[0]*6+levelArray[1]+1;
	// the level name
	var level = LEVEL_CODE[levelNum];
	var saveCurrent = new savedLevel(name, level, program);
	// savedLevels array of all the saved levels
	var savedLevels = JSON.parse(window.localStorage.getItem("savedLevels"));

	program[0] = [levelNum];

	if (savedLevels == null) {
		savedLevels = [];
	}
	savedLevels.push(saveCurrent);
	window.localStorage.setItem("savedLevels", JSON.stringify(savedLevels));
}

/**
 * object for the saved programs
 * @param {string} name name of the save
 * @param {string} level name of the level
 * @param {array} program array of the program to send to the cargo-bot
 */
const savedLevel = class {
	constructor(name, level, program) {
		this.name = name;
		this.level = level;
		this.program = program;
	}
}

// launch the save is there's a program and a name for the save
function launchSave() {
	if (!(currentProgram == null || saveNameInput.value == "")) {
		var name = saveNameInput.value;
		save(name, currentProgram);
		saveLevel.style.display = "none";
	}
}

saveNameInput.onkeydown = function () {
	// check if the key pressed is the enter key
	if (event.keyCode ==  13) {
		launchSave();
		loadLevel.style.display = "none";
	}
}

okButtonSave.onclick = function () {
	launchSave();
	saveLevel.style.display = "none";
}

okButtonLoad.onclick = function () {
	if (!(levelSelector.selectedIndex == 0)) {
		var program = JSON.parse(levelSelector.value);
		send(program);
		loadLevel.style.display = "none";
	}
}

deleteSave.onclick = function () {
	var savedLevels = JSON.parse(window.localStorage.getItem("savedLevels"));

	optionIndex = levelSelector.selectedIndex;

	// check if the list isn't empty
	if (optionIndex > 0) {
		// delete the option in the selector
		optionToDelete = levelSelector.childNodes[optionIndex];
		levelSelector.removeChild(optionToDelete);

		// delete the save in the local storage
		savedLevels.splice(optionIndex-1, 1);
		window.localStorage.setItem("savedLevels", JSON.stringify(savedLevels));
	}


}