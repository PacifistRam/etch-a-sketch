const mainContainer = document.querySelector('.main-container');
const input = document.querySelector("input");
const span = document.querySelector('span');
const gridLines = document.querySelector('.grid-lines');
const clearButton = document.querySelector('.clear');
const eraseButton = document.querySelector('.eraser')
const blackButton = document.querySelector('.black-button')
const randomButton = document.querySelector('.random-button')
const defaultPixelSize = 16;
let color = 'black';
let painting = false;

// Initial setup when the page loads
setupGrid(defaultPixelSize);
span.textContent = `${defaultPixelSize} X ${defaultPixelSize}`;
input.value = defaultPixelSize;

// Event listener for the input
input.addEventListener("input", (event) => {
    let pixelSize = input.value;
    setupGrid(pixelSize);
    span.textContent = `${pixelSize} X ${pixelSize}`;
    // input.value = pixelSize;
});

// Event listener for removing grid lines
gridLines.addEventListener('click', () => {
    toggleGridLines();
   
});
// Event listener for erasing a pixel
eraseButton.addEventListener('click', () => {
    setColor('white');
});
// Event listener for setting  pixel color default is black without this function
blackButton.addEventListener('click', () => {
    setColor('black');
});
randomButton.addEventListener('click', () => {
   color = 'randomColor';
    
});
// Event listener for resetting sketch area
clearButton.addEventListener('click', () => {
    clearSketch();
    
});

//event listeners for drag and paint
mainContainer.addEventListener('mousedown', () => {
    painting = true;
});

mainContainer.addEventListener('mouseup', () => {
    painting = false;
});

function setupGrid(pixelSize) {
    mainContainer.style.gridTemplateColumns = `repeat(${pixelSize}, 1fr)`;
    removeAllChildNodes(mainContainer);

    for (let i = 0; i < (pixelSize * pixelSize); i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel-container');
        pixel.classList.add('grid-lines-visible');
        mainContainer.appendChild(pixel);
        pixel.addEventListener('mouseover', () => {
            if (painting) {
                if (color === 'randomColor')
                {
                    pixel.style.backgroundColor = getRandomColor();
                }
                else
                {
                    pixel.style.backgroundColor = color;
                }      
            }
        });
        //code to prevent issues arise because of div's being dragged
        pixel.addEventListener('dragstart', (e) => {
            e.preventDefault();
        } );
        pixel.addEventListener('drop', (e) => {
            e.preventDefault();
        } );
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function toggleGridLines()
{
    const pixels = document.querySelectorAll('.pixel-container');
    pixels.forEach(pixel => {
        pixel.classList.toggle('grid-lines-visible');
    });
}

function clearSketch(){
    const pixels = document.querySelectorAll('.pixel-container')
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = 'white';
    })
}

function setColor(col)
{
    switch (col) {
        case 'white':
         color = 'white';
         break;
        case 'black':
         color = 'black';
         break;
       
          
        default:
          color = 'black';
          break;
      }
      
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}









































//let pixelSize = 16; 

// const mainContainer = document.querySelector('.main-container');

//     const para = document.querySelector('p');
//         const input = document.querySelector("input"); 
//         const span = document.querySelector('span');
//         input.value = '16';
//         span.textContent = input.value
//        input.addEventListener("input", (event) => { 

//         let pixelSize = input.value;
//         mainContainer.style.gridTemplateColumns = `repeat(${pixelSize},1fr)`;
//         removeAllChildNodes(mainContainer);

//         for (let i =0; i<(pixelSize*pixelSize); i++)
//     {
        
//         let pixel = document.createElement('div');
//         pixel.classList.add('pixel-container');
//         // pixel.style.backgroundColor = 'blue'; 
//         // pixel.style.border = '1px solid black';      
//         mainContainer.appendChild(pixel);
//         pixel.addEventListener('mouseover',() => {
//             pixel.style.backgroundColor = 'black';
//         })
//     }

//     span.textContent = input.value
// });


    
// /////////////////////////////////////////////////////////////
// function removeAllChildNodes(parent) {
//     while (parent.firstChild) {
//         parent.removeChild(parent.firstChild);
//     }
// }   