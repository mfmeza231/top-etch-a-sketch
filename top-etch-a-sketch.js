//Global Scope
const container = document.getElementById("container");

//Create the Grid
function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        //creates a div element that will be a 'cell'
        let cell = document.createElement('div');
        //adds text within each cell created
            //cell.innerText = (c+1);
        container.appendChild(cell).className = "grid-item";
    };
};

//Execute function to create grid
makeGrid(16, 16);