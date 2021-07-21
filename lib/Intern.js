const inquirer = require("inquirer");

const Intern = function(name, employeeId, email, school){
    this.name = name;
    this.employeeId = employeeId;
    this.email = email;
    this.school = school;
}

module.exports = Intern;