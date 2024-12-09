
const SKETCH_PAD = document.querySelector('.sketch-pad');

for (let j = 0; j < 16; j++) {
    for (let i = 0; i < 16; i++) {
        const BOX = document.createElement('div');
        BOX.classList.add('sketch-box');
        SKETCH_PAD.appendChild(BOX);
        BOX.addEventListener('mouseover', () => {
            BOX.setAttribute('style', 'background-color: burlywood;');
        });
    }
}

