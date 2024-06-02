
    /**
     * create a conditonal statement to check between two condtions 
     * check if first argument is true 
     * check if there is no error for buffer 
     * call back as the third argument 
     * return string instead a buffer
     */
const fs = require('fs');

    // Get the file path from the command-line arguments
const filePath = process.argv[2];

// Check if the file path is provided
if (!filePath) {
console.error('Please provide a file path as the first command-line argument.');
process.exit(1); // Exit the process with an error code
}

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
if (err) {
console.error('Error reading the file:', err);
process.exit(1); // Exit the process with an error code
}

// Count the number of newlines in the file content
const newlineCount = data.split('\n').length - 1;

// Print the number of newlines to the console
console.log(newlineCount);
});
