
const SKETCH_PAD = document.querySelector('.sketch-pad');
const SKETCH_PAD_DIMENSIONS = window.getComputedStyle(SKETCH_PAD).maxWidth;
const gridSizeInput = document.querySelector("#grid-size-input");

let backgroundColor = '#111720'

function onStart() {
    const gridSize = 16;
    populateSketchPad(gridSize);
}

onStart();

function applyGridSize() {
    SKETCH_PAD.innerHTML = '';
    const gridSize = (gridSizeInput.value === '' || gridSizeInput.value <= 0) ? 16: (gridSizeInput.value >= 100) ? 100: gridSizeInput.value;
    console.log(gridSize);
    (gridSizeInput.value === '' || gridSizeInput.value == 0) ? alert('Please first enter Grid Size!'): (gridSizeInput.value < 0) ? alert("Negative value isn't allowed"): null;
    populateSketchPad(gridSize);
}

function clearSketchPad() {
    const BOXES = document.querySelectorAll('.sketch-box');
    BOXES.forEach(box => {
        box.style.backgroundColor = '#ffffff';
    });
}

function populateSketchPad(gridSize) {
    const BOX_DIMENSIONS = parseInt(SKETCH_PAD_DIMENSIONS) / gridSize;

    for (let j = 0; j < gridSize; j++) {
        for (let i = 0; i < gridSize; i++) {
            const BOX = document.createElement('div');
            BOX.classList.add('sketch-box');
            BOX.setAttribute('style', `height: ${BOX_DIMENSIONS}px; width: ${BOX_DIMENSIONS}px;`);
            SKETCH_PAD.appendChild(BOX);
            BOX.addEventListener('mouseover', () => {
                BOX.setAttribute('style', `background-color: ${backgroundColor}; height: ${BOX_DIMENSIONS}px; width: ${BOX_DIMENSIONS}px;`);
            });
        }
    }
}