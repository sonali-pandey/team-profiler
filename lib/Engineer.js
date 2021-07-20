const inquirer = require ("inquirer");

const Engineer = function(name, employeeId, email, github){
    this.name = name;
    this.employeeId = employeeId;
    this.email = email;
    this.github = github;
}

module.exports = Engineer;