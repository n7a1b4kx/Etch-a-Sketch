
const SKETCH_BOX = document.querySelector('.sketch-container');

for (let j = 0; j < 16; j++) {
    for (let i = 0; i < 16; i++) {
        const DIV = document.createElement('div');
        DIV.classList.add('sketch-box');
        SKETCH_BOX.appendChild(DIV);
    }
}

