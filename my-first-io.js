const fs = require('fs');

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Read the file synchronously
const fileContent = fs.readFileSync(filePath, 'utf8');

// Count the number of newlines
const newlineCount = fileContent.split('\n').length - 1;

// Print the number of newlines to the console
console.log(newlineCount);


