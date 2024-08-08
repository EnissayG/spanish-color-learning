var colors = [
    {name: 'Red', spanish: 'Rojo'},
    {name: 'Blue', spanish: 'Azul'},
    {name: 'Green', spanish: 'Verde'},
    {name: 'Yellow', spanish: 'Amarillo'},
    {name: 'Black', spanish: 'Negro'},
    {name: 'White', spanish: 'Blanco'},
    {name: 'Orange', spanish: 'Naranja'},
    {name: 'Pink', spanish: 'Rosa'},
    {name: 'Purple', spanish: 'Morado'},
    {name: 'Brown', spanish: 'Marrón'},
    {name: 'Gray', spanish: 'Gris'}
];

function generate(){
    var div = document.getElementById('cl-display');
    var answer = document.getElementById('cl-answer');
    var lenght = colors.length;
    var index = Math.floor(Math.random() * lenght);
    var color = colors[index].name;
    var spanishcolor= colors[index].spanish;

    div.style.backgroundColor= color;
    currentDisplayColor = spanishcolor;
    answer.innerText= currentDisplayColor;
}

function verify() {
    var userInput = document.getElementById('cl-input').value.trim().toLowerCase();
    var result = document.getElementById('cl-confirmation');

    if (userInput === currentDisplayColor.toLowerCase()) {
        result.textContent = 'Correct !';
        result.style.color = 'green';
    } else {
        result.textContent = 'Wrong the right color is ' + currentDisplayColor + '.';
        result.style.color = 'red';
    }
}