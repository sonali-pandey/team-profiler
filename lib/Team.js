const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Manager = require("./manager");
const Intern = require("./Intern");


function Team(){
    this.manager = [];
    this.engineer = [];
    this.intern = [];  
}

Team.prototype.AddTeam = function(role){
    inquirer
        .prompt([
            {
                type:'input',
                name:'name',
                message:`${role} name:`
            },
            {
                type:'input',
                name:'employeeId',
                message:`${role} employee ID:`
            },
            {
                type:'input',
                name:'email',
                message:`${role} email address:`
            }
        ]).then(({name, employeeId, email})=>{

                if(role ==='Team Manager'){
                    inquirer
                    .prompt([{
                        type:'input',
                        name:'offcNum',
                        message:`${role} Office Number:`
                    }]).then(({offcNum})=>{
                        this.manager.push(new Manager(name, employeeId, email,offcNum));
                        this.nextTeam();
                    })
                    
                }
                else if(role === 'Engineer'){
                    inquirer
                    .prompt([{
                        type:'input',
                        name:'github',
                        message:`${role} GitHub Username:`
                    }]).then(({github})=>{
                        this.engineer.push(new Engineer(name, employeeId, email, github));
                        this.nextTeam();
                    })
                }
                else if(role === 'Intern'){
                    inquirer
                    .prompt([{
                        type:'input',
                        name:'school',
                        message:`${role} School name:`
                    }]).then(({school})=>{
                    this.intern.push(new Intern(name, employeeId, email, school));
                    this.nextTeam();
                })
            }
            
    })
}

Team.prototype.nextTeam = function(){
    inquirer
    .prompt([{
        type:'confirm',
        name:'confirm',
        message:'Do you want to add a team member?',
        default: false
    }]).then(({confirm})=>{
        if(confirm){
            inquirer
            .prompt([{
                type:'list',
                name:'role',
                message:'Enter role of new team member:',
                choices:['Engineer','Intern']
            }]).then(({role}) => {
                console.log(`
                ==============================
                Team Profiler: Adding ${role}
                ==============================
                `);
                this.AddTeam(role);
            })
        }
        else{
            this.display();
        }
    })
}

Team.prototype.display = function(){
    console.log(this.manager);
    console.log(this.engineer);
    console.log(this.intern);
}

module.exports = Team;