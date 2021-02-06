// main.js

// TODO

document.getElementById("volume-slider").addEventListener("input", volsliderChange);
document.getElementById("volume-number").addEventListener("input", volnumChange);

function volnumChange() {
    let vol = document.getElementById("volume-number").value;
    let volimg = document.getElementById("volume-image");

    if (vol > 100) {
	document.getElementById("volume-number").value = 100;
	vol = 100;
    }

    if (vol == "")
    {
	//document.getElementById("volume-number").value = 0;
	vol = 0;
    }
	
    document.getElementById("volume-slider").value = vol;

    if (vol >= 67) {
	volimg.src = "./assets/media/icons/volume-level-3.svg";
	document.getElementById("honk-btn").disabled = false;
    } else if (vol >= 34) {
	document.getElementById("honk-btn").disabled = false;
	volimg.src = "./assets/media/icons/volume-level-2.svg";
    } else if (vol >= 1) {
	document.getElementById("honk-btn").disabled = false;
	volimg.src = "./assets/media/icons/volume-level-1.svg";
    } else {
	volimg.src = "./assets/media/icons/volume-level-0.svg";
	document.getElementById("honk-btn").disabled = true;
    }
	
}

function volsliderChange() {
    let vol = document.getElementById("volume-slider").value;
    let volimg = document.getElementById("volume-image");

    document.getElementById("volume-number").value = vol;

    if (vol >= 67) {
	volimg.src = "./assets/media/icons/volume-level-3.svg";
	document.getElementById("honk-btn").disabled = false;
    } else if (vol >= 34) {
	document.getElementById("honk-btn").disabled = false;
	volimg.src = "./assets/media/icons/volume-level-2.svg";
    } else if (vol >= 1) {
	document.getElementById("honk-btn").disabled = false;
	volimg.src = "./assets/media/icons/volume-level-1.svg";
    } else {
	volimg.src = "./assets/media/icons/volume-level-0.svg";
	document.getElementById("honk-btn").disabled = true;
    }
}

document.getElementById("audio-selection").addEventListener("input", audioChange);

function audioChange()
{
    let soundimg = document.getElementById("sound-image");
    let sound = document.getElementById("horn-sound");
    
    if (document.getElementById("radio-air-horn").checked == true) {
	soundimg.src = "./assets/media/images/air-horn.svg";
	sound.src = "./assets/media/audio/air-horn.mp3"
    } else if (document.getElementById("radio-car-horn").checked == true) {
	soundimg.src = "./assets/media/images/car.svg";
	sound.src = "./assets/media/audio/car-horn.mp3"
    } else if (document.getElementById("radio-party-horn").checked == true) {
	soundimg.src = "./assets/media/images/party-horn.svg";
	sound.src = "./assets/media/audio/party-horn.mp3"
    }
	
}

document.getElementById("party-horn-form").addEventListener("submit", playHorn);

function playHorn() {
    //debugger;
    event.preventDefault();
    let audio = document.getElementById("horn-sound");
    audio.volume = (document.getElementById("volume-number").value / 100);
    audio.play();
}
