
const SKETCH_PAD = document.querySelector('.sketch-pad');
const SKETCH_PAD_DIMENSIONS = window.getComputedStyle(SKETCH_PAD).maxWidth;

let backgroundColor = '#111720'

function onStart() {
    const gridSize = 32;
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

onStart();

function applyGridSize() {
    SKETCH_PAD.innerHTML = '';
    const gridSizeInput = document.querySelector("#grid-size-input");
    const gridSize = (gridSizeInput.value === '' || gridSizeInput.value <= 0) ? 32: null;
    (gridSizeInput.value === '' || gridSizeInput.value <= 0) ? alert('Please first enter Grid Size!'): null;
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

function clearSketchPad() {
    const BOXES = document.querySelectorAll('.sketch-box');
    BOXES.forEach(box => {
        box.style.backgroundColor = '#ffffff';
    });
}