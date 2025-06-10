const allButtons = document.querySelectorAll("button");
const canvas = document.querySelector(".canvas");

allButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        canvas.style.cursor = "crosshair";
    });
});

document.querySelector('#grid').addEventListener('click',function(){
    const size=prompt('Write desired size (1,100)')
    return createGrid(size);
})

function createGrid(size=16){
    canvas.innerHTML="";
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i=0; i<size*size;i++){
        const pixel= document.createElement("div");
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);
    };
};

let rainbowMode= false;
let isDrawing=false;
let blackMode=false;
let eraseMode=false;

document.querySelector('#rainbowBut').addEventListener('click',function(){
    rainbowMode=true;
    blackMode=false;
    eraseMode=false;
});

canvas.addEventListener('mousedown',function(e){
    if (rainbowMode) isDrawing=true
});

canvas.addEventListener('mouseup',function(e){
    isDrawing=false;
})

canvas.addEventListener('mouseleave',function(e){
    isDrawing=false;
})

function getRandomColor(){
    return `hsl(${Math.floor(Math.random()*360)},100%,50%)`;
}

document.querySelector('#blackBut').addEventListener('click',function(){
    blackMode=true;
    rainbowMode=false;
    eraseMode=false;
})
canvas.addEventListener('mousedown',function(e){
    if(blackMode) isDrawing=true
})
canvas.addEventListener('mouseup',function(e){
    isDrawing=false
})
canvas.addEventListener('mouseleave',function(e){
    isDrawing=false
})
document.querySelector('#eraseBut').addEventListener('click',function(){
    rainbowMode=false;
    blackMode=false;
    eraseMode=true;
});
canvas.addEventListener('mousedown',function(e){
    if (eraseMode) isDrawing=true
})
canvas.addEventListener('mouseup',function(e){
    isDrawing=false
})
canvas.addEventListener('mouseleave',function(e){
    isDrawing=false
})
canvas.addEventListener('mousemove', function(e) {
    if (isDrawing && e.target.classList.contains('pixel')) {
        if (rainbowMode) {
            e.target.style.backgroundColor = getRandomColor();
        }
        if (blackMode) {
            e.target.style.backgroundColor = 'black';
        }
        if (eraseMode){
            e.target.style.backgroundColor='white';
        }
    }
});




createGrid();