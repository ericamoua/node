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
            console.log(employees[0])
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
            res.status(500).send('Internal Server Error');
        }
    });
});

app.get('/employeeID/:employeeID', (req, res) => {
    const employeeID = parseInt(req.params.employeeID);
    const employee = employees.find(emp => emp.employeeID === employeeID);
    if  (!employee) {
        return res.status(404).json({ error: 'Employee not found'});
    }

    red.json(employee);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
