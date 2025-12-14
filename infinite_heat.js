// === Infinite Heat + Infinite Fire Mod ===

runAfterLoad(() => {
    if (typeof maxTemp !== "undefined") maxTemp = Infinity;
    if (typeof minTemp !== "undefined") minTemp = -Infinity;

    for (let elem in elements) {
        if (!elements[elem]) continue;
        elements[elem].tempHigh = Infinity;
        elements[elem].tempLow = -Infinity;
    }
});

elements.infinite_fire = {
    color: ["#ff3300", "#ff6600", "#ffaa00", "#ffffff"],
    behavior: behaviors.GAS,
    category: "energy",
    state: "gas",

    temp: Infinity,
    tempHigh: Infinity,
    tempLow: -Infinity,

    burn: 999999,
    burnTime: Infinity,
    burnInto: "infinite_fire",

    density: 0.1,

    tick(pixel) {
        pixel.temp = Infinity;

        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                let x = pixe
