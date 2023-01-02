//Create the grid based on user inputs
function makeGrid() {
    var heightValue = document.getElementById("inputHeight").value;
    var widthValue = document.getElementById("inputWidth").value;
    
    const table = document.getElementById("pixelCanvas")

    for (let width = 0; width < widthValue; width++) {
        const trElem = document.createElement("tr");
        table.appendChild(trElem);
        for (let height = 0; height < heightValue; height ++) {
            const tdElem = document.createElement("td");
            tdElem.addEventListener("click", (event) => {
                const colorValue = document.getElementById("colorPicker").value;
                event.target.style.backgroundColor = colorValue;
            })
            trElem.appendChild(tdElem);
        }
    }
}

//Clear grid upon creating a new grid
function clearGrid() {
    const table = document.getElementById("pixelCanvas")
    let row = table.firstElementChild;
    while (row) {
        row.remove()
        row = table.firstElementChild;
    }
}

//Submit button clears then creates
document.addEventListener("submit", (event)=> {
    event.preventDefault();
    clearGrid();
    makeGrid();
})
