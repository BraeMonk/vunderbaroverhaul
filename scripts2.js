// script.js
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('cp2');
    const video = document.getElementById('sassy');

    playButton.addEventListener('click', function() {
        video.play();
    });
});
