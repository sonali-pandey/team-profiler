const inquirer = require ("inquirer");

const Engineer = function(name, employeeId, email, github){
    this.name = name;
    this.employeeId = employeeId;
    this.email = email;
    this.github = github;
}

Engineer.prototype.getEngineer = function(){
    inquirer
        .prompt([
            {
                type:'input',
                name:'name',
                message:'Engineer name:'
            },
            {
                type:'input',
                name:'employeeId',
                message:'Employee ID:'
            },
            {
                type:'input',
                name:'email',
                message:'Email ID:'
            },
            {
                type:'input',
                name:'github',
                message:'GitHub Username:'
            }
        ])
        .then(({name, employeeId, email, github})=>{
            this.engineer = new Engineer (name, employeeId, email, github);
            console.log(this.engineer);
        })
}

module.exports = Engineer;