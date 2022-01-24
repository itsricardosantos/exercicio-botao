let btn = document.getElementById('btn');

var bgColors = ["red", "yellow", "green", "blue", "orange", "pink"];
var colors = ["purple", "pink", "blue", "white", "black"];

let indexBackground = 0;
let indexColor = 0;

function changeBackground() {
    if (indexBackground > bgColors.length - 1) {
        indexBackground = 0;
    }
    
    btn.style.backgroundColor = bgColors[indexBackground++];
}

function changeColor() {
    if (indexColor > colors.length - 1) {
        indexColor = 0;
    }

    btn.style.color = colors[indexColor];
    btn.style.borderColor = colors[indexColor++];
}

btn.addEventListener('mouseout', changeBackground);
btn.addEventListener('mouseup', changeColor);