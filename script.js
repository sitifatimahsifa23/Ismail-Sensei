document.getElementById('playMusic').addEventListener('click', function () {
    const audio = document.getElementById('backgroundMusic');
    if (audio.paused) {
        audio.play();
        this.textContent = 'Hentikan Musik';
    } else {
        audio.pause();
        this.textContent = 'Putar Musik';
    }
});
