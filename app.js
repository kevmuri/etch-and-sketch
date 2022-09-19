function resetGrid (size) {
    for (let i = 0; i < size; i++) {
        const canvasRow = document.createElement("div");
        canvasRow.classList.add("canvasRow");
        document.getElementById("canvas").appendChild(canvasRow);
        }
}

resetGrid(16);