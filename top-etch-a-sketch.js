//Global Scope
const container = document.getElementById("grid-container");
const cell = document.getElementsByClassName("grid-item");
const resetBtn = document.getElementById('reset-btn')

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
makeGrid(16, 16);

//Shading cells with click
//cell is an array of divs, loop through each div element will allow EventListener to work
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', () => {
        cell[i].style.background = 'black';
    })
}

//Reset Grid
resetBtn.addEventListener('click', () => {
    for (let i = 0; i < cell.length; i++) {
        cell[i].style.background = '';
    }
})