
const SKETCH_PAD = document.querySelector('.sketch-pad');

for (let j = 0; j < 14; j++) {
    for (let i = 0; i < 14; i++) {
        const BOX = document.createElement('div');
        BOX.classList.add('sketch-box');
        SKETCH_PAD.appendChild(BOX);
        BOX.addEventListener('mouseover', () => {
            BOX.setAttribute('style', 'background-color: burlywood;');
        });
    }
}

function applyGridSize() {
    const gridSizeInput = document.querySelector("#grid-size-input");
    const gridSize = gridSizeInput.value;
    console.log(gridSize);
}