//Setup
const sketch = document.querySelector(".sketch");
const reset = document.getElementById("reset");
const color = document.getElementById("color");

const choice_size_button = document.getElementById("choice_size_button"); //Open a window with size selection
const size = document.getElementById("size"); // Size
const submit_size = document.getElementById("submit_size"); //Submit the size
const change_size_window = document.querySelector(".change_size");

let sketchSize = 30;


//Check if mouse still press or not 
let mouseDown = false;
sketch.addEventListener('mousedown', () => { mouseDown = true; });
sketch.addEventListener('mouseup', () => { mouseDown = false; });



function setupSketch(){
    let pixel;
    pixelSize = getPixelSize();
    for(let i = 0; i < sketchSize; i++){
        //Create verticals for the sketch where will be amount of pixels
        const vertical = document.createElement("div")
        vertical.classList.add("vertical")
        sketch.appendChild(vertical)

        //Create pixels, modify them and adding to new vertical
        for(let j = 0; j < sketchSize; j++){
            pixel = document.createElement("div");
            pixel.style.backgroundColor = 'white';
            pixel.style.height = `${pixelSize}px`;
            pixel.style.width = `${pixelSize}px`;
            pixel.style.border = "solid 1px";
            pixel.classList.add("pixel")

            vertical.appendChild(pixel);
            //Create event that will change color of pixel if it press
            (function(currentPixel) {
                currentPixel.addEventListener('mouseover', () => {
                    if (mouseDown) {
                        currentPixel.style.backgroundColor = color.value;
                    }
                });
            })(pixel);
             
        }
    }
}

function getPixelSize(){
    return sketch.offsetHeight/sketchSize - 2;
}

function removeAllPixels(){
    const allPixels = document.querySelectorAll(".pixel");
    allPixels.forEach((pixel) => {
        pixel.style.backgroundColor = "white";
    });
}

function changeSize(){
    if(size.value === undefined) size.value = 1;
    else if(size.value >= 1 && size.value <= 64){
        sketchSize = size.value;
        deleteAllVerticals();
        setupSketch();
    }
}

function deleteAllVerticals(){
    while (sketch.firstChild) {
        sketch.removeChild(sketch.firstChild);
    }
}

function changeVisibility(){
    change_size_window.classList.toggle("hide");
}


function main(){
    setupSketch();
    reset.addEventListener('click', removeAllPixels);
    submit_size.addEventListener('click', changeSize);
    choice_size_button.addEventListener('click', changeVisibility)
}

main();