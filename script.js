
let colors =  generateColors(6)
let squares = document.querySelectorAll('.square');
let pickedColor ;
let colorDisplay = document.querySelector('#colorDisplay');
let h1 = document.querySelector('h1');
let messageDisplay = document.querySelector('#message');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');
let resetBtn = document.querySelector('#reset')

//GENERATE RANDOM NUMBER BETWEEN 0 and 255
function generateRandom() {
    return Math.floor(Math.random() * 255);
};

//GENERATE COLORS 
function generateColors (num) {
    arr = [];
    for (i=0; i<num; i++){
        arr[i] = "rgb("+ generateRandom() + ", " + generateRandom() + ", " + generateRandom() + ")"
    }
    return arr; 
}

//pick random color
function randomColor() {
    return Math.floor(Math.random() * colors.length);
}

pickedColor = colors[randomColor()]
colorDisplay.textContent = pickedColor;

//ASSIGN COLORS / CLICK LISTNER FOR CORRECT ANSWER
function assignAndListen() {
    for (let i=0; i<colors.length; i++) {
        //assign colors 
        squares[i].style.backgroundColor = colors[i];
        
        squares[i].addEventListener('click', function() {
            let clicked = squares[i].style.backgroundColor;
            if (clicked !== pickedColor) {
                this.style.backgroundColor = '#232323'; 
                messageDisplay.textContent = "Try Again! " 
            }
            else {
                changeColors(pickedColor)
                h1.style.backgroundColor = pickedColor;
                messageDisplay.textContent = "Correct!"
            }
        });
    };
};

function changeColors (color){
    for(i=0; i<colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
};


hardBtn.addEventListener('click', function() {
    colors =  generateColors(6);
    randomColor();
    assignAndListen();
    pickedColor = colors[randomColor()]
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = ""
    h1.style.backgroundColor = '#4682b4';
});

easyBtn.addEventListener('click', function() {
    colors =  generateColors(3);
    randomColor();
    assignAndListen();
    pickedColor = colors[randomColor()]
    colorDisplay.textContent = pickedColor;
    for (i=3; i<squares.length; i++) {
        squares[i].style.backgroundColor = '#232323';
    }
    messageDisplay.textContent = ""
    h1.style.backgroundColor = '#4682b4';
});

resetBtn.addEventListener('click', function() {
    if (colors.length === 6){
        colors =  generateColors(6);
    } else 
        colors =  generateColors(3);
    randomColor();
    assignAndListen();
    pickedColor = colors[randomColor()]
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = ""
    h1.style.backgroundColor = '#4682b4';
});

assignAndListen()

