let slider = document.getElementById("sizeSlider")
let SizeValue = 16;
slider.oninput = function () {
    let counter = document.getElementById("counter");
    counter.innerHTML = "size: " + slider.value + "x" + slider.value;
    updateSizeValue(this.value)

}

function resetGrid(size) {
    const canvas = document.getElementById("canvas")

    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }

    for (let i = 0; i < size; i++) {
        const canvasRow = document.createElement("div");
        canvasRow.classList.add("canvasRow");
        canvasRow.setAttribute("id","canvasRow"+i);
        canvas.appendChild(canvasRow);
        
        for (let j = 0; j < size; j++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.setAttribute("id","pixel"+i+"_"+j);
            pixel.addEventListener("mouseover", function(e){darken(e.target.id, e)});
            pixel.addEventListener("mousedown", function(e){darken(e.target.id, e)});
            document.getElementById("canvasRow"+i).appendChild(pixel);
        }
    }
}

function darken(pixel, e) {
    if (e.buttons == 1) {
        document.getElementById(pixel).style.backgroundColor = "black";
    }
}

function showPopup() {
    var popup = document.getElementById("popup");
    console.log(popup.style.display);
    if (popup.style.display == "none") {
        popup.style.display = "block";
    }
    else {
        popup.style.display = "none";
    }
}

function updateSizeValue(value) {
    SizeValue = value;
}

function resizeGrid() {
    document.getElementById("popup").style.display = "none";
    resetGrid(SizeValue);
}

resetGrid(16);
