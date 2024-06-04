const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint to get all employees
app.get('/employees', (req, res) => {
    //const filePath = path.join(__dirname, 'employees.json');
    
    fs.readFile('hard.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        try {
            const employees = JSON.parse(data);
            res.json(employees);
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
            res.status(500).send('Internal Server Error');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
