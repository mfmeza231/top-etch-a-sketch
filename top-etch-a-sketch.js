//Global Scope
const container = document.getElementById("grid-container");
const cell = document.getElementsByClassName("grid-item");
const resetBtn_button = document.getElementById('reset-btn');
let isDrawing = false;

//Create the Grid
function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        //creates a div element that will be a 'cell'
        let cell = document.createElement('div');
        //adds text within each cell created
            //cell.innerText = (c+1);
        //gives class name of "grid-item" to the cell
        container.appendChild(cell).className = "grid-item";
    };
};

//Execute function to create grid
//Use before EventListeners as it will need to be set up before any action can take place
makeGrid(24, 24);

//Shading cells with click
//Cell is an array of divs, loop through each div element will allow EventListener to work
//Initiates the drawing function
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('mousedown', () => {
        isDrawing = true;
        console.log('is Drawing');
    }) 
}

//Draws in with one click
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', () => {
        cell[i].style.background = 'black';
    }) 
}

//Continues to draw while mouse is pressed down
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('mousemove', () => {
        if (isDrawing == true) {
            cell[i].style.background = 'black'; 
        }
    })    
}

//Exits drawing when mouse is let go
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('mouseup', () => {
        isDrawing = false;
    }) 
}

//Reset Grid
resetBtn_button.addEventListener('click', () => {
    for (let i = 0; i < cell.length; i++) {
        cell[i].style.background = '';
    }
})