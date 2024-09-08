document.addEventListener('DOMContentLoaded', function () {
    var musica = document.getElementById('audio');
    var volumeSlider = document.getElementById('volumeSlider');

    musica.volume = 0.2;
    volumeSlider.value = 0.2;

    function updateVolume() {
        musica.volume = volumeSlider.value;
    }

    volumeSlider.addEventListener('input', updateVolume);

    musica.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    })

    window.playMusica = function () {
        musica.play();
    }

    window.pauseMusica = function () {
        musica.pause();
    }

    window.stopMusica = function () {
        musica.pause();
        musica.currentTime = 0;
    }
});