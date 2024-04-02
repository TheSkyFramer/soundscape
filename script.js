// All of the following code is so that the user is able to click on the images to start and pause the audio

document.getElementById('image-1').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    var audio2 = document.getElementById('audio1');

    if (audio.paused) {
        if(!audio2.paused){
            audio2.pause();
        }
        audio.play();
    } else {
        audio.pause();
    }
});

document.getElementById('image-2').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    var audio2 = document.getElementById('audio1');
    if (audio.paused) {
        if(!audio2.paused){
            audio2.pause();
        }
        audio.play();
    } else {
        audio.pause();
    }
});

document.getElementById('image-3').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    var audio2 = document.getElementById('audio1');
    if (audio.paused) {
        if(!audio2.paused){
            audio2.pause();
        }
        audio.play();
    } else {
        audio.pause();
    }
});

document.getElementById('image-4').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    var audio2 = document.getElementById('audio1');
    if (audio.paused) {
        if(!audio2.paused){
            audio2.pause();
        }
        audio.play();
    } else {
        audio.pause();
    }
});


document.getElementById('image-5').addEventListener('click', function() {
    var audio = document.getElementById('audio1');
    var audio2 = document.getElementById('audio');
    if (audio.paused) {
        if(!audio2.paused){
            audio2.pause();
        }
        audio.play();
    } else {
        audio.pause();
    }
});



document.getElementById('image-6').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    var audio2 = document.getElementById('audio1');
    var audio3 = document.getElementById('audio2');
    if (audio3.paused) {
        if(!audio.paused){
            audio.pause();
        }
        if(!audio2.paused){
            audio2.pause();
        }

        audio3.play();
    } else {
        audio3.pause();
    }
});


document.getElementById('image-7').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    var audio2 = document.getElementById('audio1');
    var audio3 = document.getElementById('audio2');
    var audio4 = document.getElementById('audio3');

    if (audio4.paused) {
        if(!audio.paused){
            audio.pause();
        }
        if(!audio2.paused){
            audio2.pause();
        }
        if(!audio3.paused){
            audio3.pause();
        }
        audio4.play();
    } else {
        audio4.pause();
    }
});

document.getElementById('image-8').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    var audio2 = document.getElementById('audio1');

    if (audio.paused) {
        if(!audio2.paused){
            audio2.pause();
        }
        audio.play();
    } else {
        audio.pause();
    }
});