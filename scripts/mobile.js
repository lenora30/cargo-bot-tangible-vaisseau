var modalImg = document.getElementById('modalImg');
var videoSelect = document.getElementById('videoSource');
var imageInput = document.getElementById("imageInput");
var closeButtonImg = document.getElementById("closeButtonImg");
var computerID = window.location.hash;
var cameras = [];
var peer = new Peer({
    config: {'iceServers': [
        { url: 'stun:stun.l.google.com:19302' },
        { url: 'turn:cargobot-tangible.u-strasbg.fr', username: 'azertyuiop', credential: 'azertyuiop' }
    ]}
});
var conn;
var tabInstruc;

// need to wait a bit before connecting to the computer dunno why
var delayInMilliseconds = 1000;

setTimeout(function() {
    if (computerID) {
        connect(computerID.substring(1));
    }
}, delayInMilliseconds);

// connect to the computer, get the computer ID in the URL hash
function connect(computerID) {
    conn = peer.connect(computerID);
    conn.on('open', function () {
        document.getElementById("sText").innerHTML = "Connecté";
        document.getElementById("sIcon").src = "style/img/connected.svg";
        imageInput.disabled=false;
    });

    conn.on('close', function () {
        document.getElementById("sText").innerHTML = "Déconnecté";
        document.getElementById("sIcon").src = "style/img/disconnected.svg";
        imageInput.disabled=true;
    });
}

// get the image when it's taken and send it to the computer
document.addEventListener('DOMContentLoaded', event => {
    imageInput.onchange = function(event) {
        var file = event.target.files[0]
        var blob = new Blob(event.target.files, { type: file.type })

        conn.send({
            file: blob,
            filename: file.name,
            filetype: file.type
        });
    }
});