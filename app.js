function resetGrid(size) {
    for (let i = 0; i < size; i++) {
        const canvasRow = document.createElement("div");
        canvasRow.classList.add("canvasRow");
        canvasRow.setAttribute("id","canvasRow"+i);
        document.getElementById("canvas").appendChild(canvasRow);
        
        for (let j = 0; j < size; j++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.setAttribute("id","pixel"+i+"_"+j);
            pixel.addEventListener("mousedown", function(e){darken(e.target.id)});
            document.getElementById("canvasRow"+i).appendChild(pixel);
        }
    }
}

function darken(pixel) {
    document.getElementById(pixel).style.backgroundColor = "black";
}


resetGrid(16);