runAfterLoad(() => {
    const glowElements = ["fire", "lava", "plasma", "lightning"];

    function brighten(color, amt) {
        if (!color || typeof color !== "string") return color;
        if (!color.startsWith("rgb")) return color;

        let nums = color.match(/\d+/g);
        if (!nums) return color;

        let r = Math.min(255, +nums[0] + amt);
        let g = Math.min(255, +nums[1] + amt);
        let b = Math.min(255, +nums[2] + amt);

        return `rgb(${r},${g},${b})`;
    }

    glowElements.forEach(el => {
        if (!elements[el]) return;

        const oldTick = elements[el].tick;

        elements[el].tick = function(pixel) {
            if (oldTick) oldTick(pixel);

            for (let dx = -1; dx <= 1; dx++) {
                for (let dy = -1; dy <= 1; dy++) {
                    let x = pixel.x + dx;
                    let y = pixel.y + dy;
                    if (outOfBounds(x, y)) continue;

                    let p = pixelMap[x][y];
                    if (!p) continue;

                    p.color = brighten(p.color, 20);
                }
            }
        };
    });
});

