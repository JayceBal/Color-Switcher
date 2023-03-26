function simpleColorPicker() {
    const simpleColors = ["red", "blue", "green", "purple", "cyan", "black", "gray", "orange", "pink"];
    let rng = Math.floor(Math.random() * simpleColors.length);
    document.getElementById("color-block").style.backgroundColor = simpleColors[rng];
    document.getElementById("background-thing").innerText = "Background Color: " + simpleColors[rng].toUpperCase()[0] + simpleColors[rng].substring(1);
}

function hexColorPicker() {
    let result = '';
    const characters = 'abcdef0123456789';
    let counter = 0;
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById("color-block").style.backgroundColor = "#" + result;
    document.getElementById("background-thing").innerText = "Background Color: #" + result;
}


