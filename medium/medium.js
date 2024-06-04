const fs = require('fs');
const path = require('path');

// Construct the path to the file
// const filePath = path.join(__dirname, 'file.txt');

fs.readFile('file.txt', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    const array = data.toString().split("\n");
    for (const line of array) {
        console.log(line);
    }
});

// console.log("mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto");

