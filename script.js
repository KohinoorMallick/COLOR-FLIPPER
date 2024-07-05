const flipButton = document.getElementById('flip-button');
const colorDisplay = document.getElementById('color-display');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function flipColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorDisplay.textContent = newColor;
    colorDisplay.style.backgroundColor = newColor;
}

flipButton.addEventListener('click', flipColor);
