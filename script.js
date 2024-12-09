
const SKETCH_PAD = document.querySelector('.sketch-pad');
const SKETCH_PAD_DIMENSIONS = window.getComputedStyle(SKETCH_PAD).maxWidth;

function applyGridSize() {
    SKETCH_PAD.innerHTML = '';
    const gridSizeInput = document.querySelector("#grid-size-input");
    const gridSize = gridSizeInput.value;
    const BOX_DIMENSIONS = parseInt(SKETCH_PAD_DIMENSIONS) / gridSize;

    for (let j = 0; j < gridSize; j++) {
        for (let i = 0; i < gridSize; i++) {
            const BOX = document.createElement('div');
            BOX.classList.add('sketch-box');
            BOX.setAttribute('style', `height: ${BOX_DIMENSIONS}px; width: ${BOX_DIMENSIONS}px;`);
            SKETCH_PAD.appendChild(BOX);
            BOX.addEventListener('mouseover', () => {
                BOX.setAttribute('style', `background-color: burlywood; height: ${BOX_DIMENSIONS}px; width: ${BOX_DIMENSIONS}px;`);
            });
        }
    }

    console.log(BOX_DIMENSIONS);
    console.log(gridSize);
}