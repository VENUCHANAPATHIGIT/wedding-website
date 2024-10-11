const audioPlayer = document.getElementById('audioPlayer');

function playAudio() {
    audioPlayer.play().catch(error => {
        console.error("Playback failed:", error);
    });
}

function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Reset to the beginning
}
