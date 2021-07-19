const inquirer = require ("inquirer");

const Manager = function (name, employeeId, email, offcNum){
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
        this.offcNum = offcNum;
    }

Manager.prototype.getManager = function() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter Team Manager name:'
            },
            {
                type:'input',
                name:'employeeId',
                message: 'Please enter Manager Employee ID:'
            },
            {
                type:'input',
                name:'email',
                message: 'Please enter Manager Email address:'
            },
            {
                type:'input',
                name:'offcNum',
                message: 'Please enter Manager Office Number:'
            }
        ])
        .then(({ name, employeeId, email, offcNum }) => {
            this.manager = new Manager (name, employeeId, email, offcNum);
            console.log(this.manager);
        })      
}

module.exports = Manager;

