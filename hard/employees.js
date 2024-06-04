const express = require('express');
const employees = require('./employees.json');

const app = express();
const PORT = 3000;

app.get('/employees', (req, res) => {
    res.json(employees);
})

app.get('/employees/:employeeID', (req, res) => {
    const employeeID = parseInt(req.params.employeeID);
    const employee = employees.find(emp => emp.employeeID === employeeID);
    if  (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
    }
        
    res.json(employee);
    
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
