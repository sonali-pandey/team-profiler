const inquirer = require ("inquirer");

function Manager (name, employeeId, email, offcNum){
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
        this.offcNum = offcNum;
    }

module.exports = Manager;