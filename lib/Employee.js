const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Manager = require("./manager");
const Intern = require("./Intern");
const pageTemplate = require("../src/pageTemplate");
const validator = require('email-validator');


function Team(){
    this.manager = [];
    this.engineer = [];
    this.intern = [];  
}

// add team member details
Team.prototype.AddTeam = function(role){
    inquirer
        .prompt([
            {
                type:'input',
                name:'name',
                message:`${role} name (Required):`,
                validate: nameInput =>{
                    if(nameInput){
                        return true;
                    }else{
                        console.log(`\n\nError: Please enter ${role} Name!\n`);
                        return false;
                    } 
                }
            },
            {
                type:'input',
                name:'employeeId',
                message:`${role} employee ID (Required):`,
                validate: idInput =>{
                    if(idInput){
                        return true;
                    }else{
                        console.log(`\n\nError: Please enter ${role} employee ID!\n`);
                        return false;
                    } 
                }
            },
            {
                type:'input',
                name:'email',
                message:`${role} email address (Required):`,
                validate: emailInput =>{
                    if(validator.validate(emailInput)){
                        return true;
                    }else{
    
                        console.log("\n\nError: Need a valid Email ID to continue!\n");
                        return false;
                    } 
                }
            }
        ]).then(({name, employeeId, email})=>{

                if(role ==='Team Manager'){
                    inquirer
                    .prompt([{
                        type:'input',
                        name:'offcNum',
                        message:`${role} Office Number (Required):`,
                        validate: offcNumInput =>{
                            if(offcNumInput){
                                return true;
                            }else{
                                console.log(`\n\nError: Please enter ${role}office number!\n`);
                                return false;
                            } 
                        }
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
                        message:`${role} GitHub Username (Required):`,
                        validate: githubInput =>{
                            if(githubInput){
                                return true;
                            }else{
                                console.log(`\n\nError: Please enter GitHub username!\n`);
                                return false;
                            } 
                        }
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
                        message:`${role} School name (Required):`,
                        validate: schoolInput =>{
                            if(schoolInput){
                                return true;
                            }else{
                                console.log(`\n\nError: Please enter ${role} school name!\n`);
                                return false;
                            } 
                        }
                    }]).then(({school})=>{
                    this.intern.push(new Intern(name, employeeId, email, school));
                    this.nextTeam();
                })
            }
            
    })
}

// Add next team memeber
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
            this.generatePage();
        }
    })
}

// generate HTML file
Team.prototype.generatePage = function(){

    const team = {
        manager: this.manager,
        engineer: this.engineer,
        intern: this.intern
    }
    
    const teamInfo = pageTemplate(team);

    fs.writeFile('./dist/index.html', teamInfo , err => {
        if (err) throw new Error(err);

        console.log('Team profile page generated!');
      });
}

module.exports = Team;