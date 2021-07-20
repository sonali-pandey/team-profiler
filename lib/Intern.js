const inquirer = require("inquirer");

const Intern = function(name, employeeId, email, school){
    this.name = name;
    this.employeeId = employeeId;
    this.email = email;
    this.school = school;
}

Intern.prototype.getIntern=function(){
    inquirer
        .prompt([
            {
                type:'input',
                name:'name',
                message:"Intern Name:"
            },
            {
                type:'input',
                name:'employeeId',
                message:"Employee ID:"
            },
            {
                type:'input',
                name:'email',
                message:'Email ID:'
            },
            {
                type:'input',
                name:'school',
                message:'School Name:'
            }
        ])
        .then(({name, employeeId, email, school})=>{
            this.intern = new Intern(name, employeeId, email, school);
            console.log(this.intern);
        })
}

module.exports = Intern;