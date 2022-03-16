// Define additional global variables that are used throughout the code.
// Point is to use variables for this strings. This is typically cleaner and helps you avoid typos.

// For Mouse Events I would have an Enum type to define the events.
// Then you can refer to the events with a variable instead of a hard coded string.
// It's cleaner code when your referencing the string multiple times.
const EVENTS = {
    MOUSE_CLICK: 'click',
    MOUSE_MOVE: 'mousemove',
    MOUSE_UP: 'mouseup',
    MOUSE_DOWN: 'mousedown',
    CLEAR: ''
};

const INNER_TEXT = {
    RANDOM: 'RANDOM',
    BLACK_WHITE: "BLACK / WHITE",
    CLEAR: ''
};

const DEFAULT_COLOR = 'black';
// You only refer to one color but if you ever expanded you could
// do a similar thing and list the colors like so.
// const COLORS = {
//     BLACK: 'black',
//     BLUE: 'blue',
//     GREEN: 'green',
//     RED: 'red',
//     WHITE: 'white'
// }

const GRID_SIZE = {
    SMALL: 10,
    MEDIUM: 20,
    LARGE: 30
}


//It's common practice to define global variables with all caps
//Global Scope
const container = document.getElementById("grid-container"); // use single quotes when referencing the elements. For consistiency.
const cell = document.getElementsByClassName("grid-item");
const resetBtn_button = document.getElementById('reset-btn');
const rgbBtn_button = document.getElementById('rgb-btn');
const gridSmall_button = document.getElementById('grid-small');
const gridMedium_button = document.getElementById('grid-medium');
const gridLarge_button = document.getElementById('grid-large');
const gridSize_span = document.getElementById('grid-size');
let isDrawing = false;

//Create the Grid
function makeGrid(size) { // since you always create a square, I would just take in one parameter for rows/columns
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (c = 0; c < (size * size); c++) {
        //creates a div element that will be a 'cell'
        let cell = document.createElement('div');
        //adds text within each cell created
            //cell.innerText = (c+1);
        //gives class name of "grid-item" to the cell
        container.appendChild(cell).className = "grid-item";
    }
    draw();
};

//Execute function to create grid
//Use before EventListeners as it will need to be set up before any action can take place
makeGrid(GRID_SIZE.MEDIUM);

//Altering Grid Size
gridSmall_button.addEventListener(EVENTS.MOUSE_CLICK, () => {
    // This can be reduced to one line
    //Resets the div to erase the existing grid first
    // function clearcontent() {
    //     container.innerHTML = INNER_TEXT.CLEAR;
    // }
    // clearcontent();
    container.innerHTML = INNER_TEXT.CLEAR;
    makeGrid(GRID_SIZE.SMALL);
    //makeGrid() already calls draw(); 
})
gridMedium_button.addEventListener(EVENTS.MOUSE_CLICK, () => {
    // This can be reduced to one line
    //Resets the div to erase the existing grid first
    // function clearcontent(container) {
    //     container.innerHTML = INNER_TEXT.CLEAR;
    // }
    // clearcontent(container);
    container.innerHTML = INNER_TEXT.CLEAR;
    makeGrid(GRID_SIZE.MEDIUM);
})
gridLarge_button.addEventListener(EVENTS.MOUSE_CLICK, () => {
    // This can be reduced to one line
    //Resets the div to erase the existing grid first
    // function clearcontent(container) {
    //     container.innerHTML = INNER_TEXT.CLEAR;
    // }
    // clearcontent(container);
    container.innerHTML = INNER_TEXT.CLEAR;
    makeGrid(GRID_SIZE.LARGE);
})

//Toggle RGB
function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    //Calls out random RGB value
    let ranColor = "rgb(" + r + "," + g + "," + b + ")";
    return ranColor;
}

//Toggle Name of RGB Button
rgbBtn_button.addEventListener(EVENTS.MOUSE_CLICK, () => {

    // if(rgbBtn_button.innerText === INNER_TEXT.BLACK_WHITE){
    //     rgbBtn_button.innerText = INNER_TEXT.RANDOM;
    // } else {
    //     rgbBtn_button.innerText = INNER_TEXT.BLACK_WHITE;
    // }
    // COOL TRICK IN JAVASCRIPT FOR IF/ELSE STATMENTS
    // this is saying if (rgbBtn_button.innerText === BLACK / WHITE) then return RANDOM. Otherwise, return BLACK / WHITE
    rgbBtn_button.innerText = rgbBtn_button.innerText === INNER_TEXT.BLACK_WHITE ? INNER_TEXT.RANDOM : INNER_TEXT.BLACK_WHITE;
})

//Shading cells with click
//Cell is an array of divs, loop through each div element will allow EventListener to work
//Initiates the drawing function
function drawMouseDn() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener(EVENTS.MOUSE_DOWN, () => {
            isDrawing = true;
        }) 
    }
}

//Draws in with one click
function drawOneClick() {
for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener(EVENTS.MOUSE_CLICK, () => {
            //Condition for which RGB will be turned on
            if (rgbBtn_button.innerText === INNER_TEXT.RANDOM){
                //Define rgbColor from the rgb generator function
                let rgbColor = randomRGB();
                cell[i].style.background = rgbColor;
            } else {
                cell[i].style.background = DEFAULT_COLOR;
            }
        }) 
    }
}

//Continues to draw while mouse is pressed down
function drawMouseMove() {
for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener(EVENTS.MOUSE_MOVE, () => {
            if (isDrawing == true) {
                if (rgbBtn_button.innerText === INNER_TEXT.RANDOM){
                    let rgbColor = randomRGB();
                    cell[i].style.background = rgbColor;
                } else {
                    cell[i].style.background = DEFAULT_COLOR;
                } 
            }
        })    
    }
}

//Exits drawing when mouse is let go
function drawMouseUp() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener(EVENTS.MOUSE_UP, () => {
            isDrawing = false;
        }) 
    }
}

//Consolidate drawing functions
function draw() {
    drawMouseDn();
    drawOneClick();
    drawMouseMove();
    drawMouseUp();
}

//Reset Grid
resetBtn_button.addEventListener(EVENTS.MOUSE_CLICK, () => {
    for (let i = 0; i < cell.length; i++) {
        cell[i].style.background = EVENTS.CLEAR;
    }
})