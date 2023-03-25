function simpleColorPicker() {
    const simpleColors = ["red", "blue", "green", "purple", "cyan", "black", "gray", "orange", "pink"];
    let rng = Math.floor(Math.random() * simpleColors.length);
    document.getElementById("color-block").style.backgroundColor = simpleColors[rng];
    document.getElementById("background-thing").innerText = "Background Color: " + simpleColors[rng].toUpperCase()[0] + simpleColors[rng].substring(1);
}