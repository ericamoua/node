/**
 * create a function that console.log array of files 
 * make an array of files
 * takes two arguments 
 * first argument is an fs.readdir() 
 * call back function the second argument
 * use input and output 
 */



const fs = require('fs');
const path = require('path');

// Check if the correct number of command-line arguments are provided
if (process.argv.length !== 4) {
    console.error('Usage: node filtered-ls.js directory extension');
    process.exit(1); // Exit with an error code
}

// Read the directory asynchronously
fs.readdir(process.argv[2], (err, list) => {
    if (err) {
        console.error('Error reading the directory:', err);
        process.exit(1); // Exit with an error code
    }

    // Filter the list of files by the provided extension
    const filteredFiles = list.filter(file => path.extname(file) === '.' + process.argv[3]);

    // Print the filtered files to the console
    filteredFiles.forEach(file => console.log(file));
});
