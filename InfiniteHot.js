// Sandboxels Red Water Script
// This script turns all water into red in the Sandboxels game

// Wait until the game is loaded
setTimeout(() => {
    // Check if the pixel system exists
    if (window.PixelManager && window.PixelManager.pixels) {
        // Loop through all defined pixels
        for (let key in PixelManager.pixels) {
            let pixel = PixelManager.pixels[key];

            // If the pixel is water, change its color to red
            if (pixel.name.toLowerCase().includes("water")) {
                pixel.color = "#FF0000"; // Bright red
            }
        }

        console.log("All water pixels are now red!");
    } else {
        console.log("PixelManager not found. Make sure Sandboxels is loaded.");
    }
}, 1000); // 1 second delay to ensure game is fully loaded


