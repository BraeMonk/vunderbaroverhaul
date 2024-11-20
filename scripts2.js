// script.js
document.addEventListener('DOMContentLoaded', function() {
    const transitionOverlay = document.getElementById('transition-overlay');
    const transitionVideo = document.getElementById('transition-video');
    const transitionButton = document.getElementById('cp2');

    // Function to start the transition effect and navigate to the next page
    function startTransition(url) {
        // Show the video transition overlay
        transitionOverlay.classList.remove('hidden');
        transitionVideo.play();

        // Wait for the video to end before navigating
        transitionVideo.onended = function() {
            window.location.href = url;
        };
    }

    // Add click event listener to the button
    transitionButton.addEventListener('click', function() {
        const targetUrl = 'next-page.html';  // Replace with your target URL
        startTransition(targetUrl);
    });
});
