const inquirer = require ("inquirer");
const Engineer = require("./Engineer.js");

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
        .then(({ name, employeeId, email, offcNum}) => {
            this.manager = new Manager (name, employeeId, email, offcNum);
            this.getTeam();
            }
        )
}

Manager.prototype.getTeam = function(){
            inquirer
                .prompt({
                type:'list',
                name:'team',
                message:'Do you want to add team member?',
                choices:['Engineer','Intern','Finish']
            }).then(({team})=>{
                if(team==='Engineer'){
                    new Engineer().getEngineer();
                }
                else if(team === 'Finish'){
                    console.log("Team Profile Ready");
                }
            })      
}

module.exports = Manager;

