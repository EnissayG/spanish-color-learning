document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.querySelector('.generate');
    const verifyButton = document.querySelector('.confirm');
    const listenButton = document.querySelector('.listen');

    generateButton.addEventListener('click', generate);
    verifyButton.addEventListener('click', verify);
    listenButton.addEventListener('click', playaudio);

    var colors = [
        {name: 'Red', spanish: 'Rojo', audio: 'audio/rojo.mp3'},
        {name: 'Blue', spanish: 'Azul', audio: 'audio/azul.mp3'},
        {name: 'Green', spanish: 'Verde', audio: 'audio/verde.mp3'},
        {name: 'Yellow', spanish: 'Amarillo', audio: 'audio/amarillo.mp3'},
        {name: 'Black', spanish: 'Negro', audio: 'audio/negro.mp3'},
        {name: 'White', spanish: 'Blanco', audio: 'audio/blanco.mp3'},
        {name: 'Orange', spanish: 'Naranja', audio: 'audio/naranja.mp3'},
        {name: 'Pink', spanish: 'Rosa', audio: 'audio/rosa.mp3'},
        {name: 'Purple', spanish: 'Morado', audio: 'audio/morado.mp3'},
        {name: 'Brown', spanish: 'Marrón', audio: 'audio/marron.mp3'},
        {name: 'Gray', spanish: 'Gris', audio: 'audio/gris.mp3'}
    ];

    var currentColor = null;
    var audio = new Audio();
    var audioWin = new Audio('audio/goodjob.mp3');

    function generate() {
        var div = document.getElementById('cl-display');
        var randomIndex = Math.floor(Math.random() * colors.length);
        currentColor = colors[randomIndex];

        div.style.backgroundColor = currentColor.name.toLowerCase();
        document.getElementById('cl-answer').textContent = '';
        document.getElementById('cl-input').value = '';
        document.getElementById('cl-confirmation').textContent = ''; 

        audio.src = currentColor.audio;
        audio.load();
    }

    function verify() {
        var userInput = document.getElementById('cl-input').value.trim().toLowerCase();
        var result = document.getElementById('cl-answer');

        if (userInput === currentColor.spanish.toLowerCase()) {
            result.textContent = 'Correct !';
            result.style.color = 'green';
            audioWin.play();
        } else {
            result.textContent = 'Incorrect. La bonne réponse est ' + currentColor.spanish + '.';
            result.style.color = 'red';
        }
    }

    function playaudio() {
        if (currentColor && audio) {
            audio.play();
        }
    }
});
