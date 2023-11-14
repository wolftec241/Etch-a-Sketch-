//Setup
const mainContainer = document.querySelector(".mainContainer");
const sketch = document.createElement("div");
let sketchSize = 15;

const SKETCH_SIZE = 400;


//Check if mouse still press or not 
let mouseDown = false;
sketch.addEventListener('mousedown', () => { mouseDown = true; });
sketch.addEventListener('mouseup', () => { mouseDown = false; });



function setupSketch(){
    sketch.style.height = `${SKETCH_SIZE}px`;
    sketch.style.width = `${SKETCH_SIZE}px`;

    addingNewPixels();
}

function addingNewPixels(){
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

            vertical.appendChild(pixel);
            //Create event that will change color of pixel if it press
            (function(currentPixel) {
                currentPixel.addEventListener('mouseover', () => {
                    if (mouseDown) {
                        currentPixel.style.backgroundColor = "black";
                    }
                });
            })(pixel);
             
        }
    }
}

function getPixelSize(){
    return SKETCH_SIZE/sketchSize - 2;
}



function main(){
    setupSketch();
    mainContainer.appendChild(sketch);
}

main();