const inquire = require("inquirer");
const { managerQuestions, MainMenuQuestions, engineerQuestions, internQuestions } = require("./generateQuestions");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const managerArr = [];
const internArr = [];
const engineerArr = [];



const doMenuQuestions = () => {
    inquire.prompt(MainMenuQuestions)
    .then((response) => {
        switch (response.options) {
            case "Add a manager":
               manager();
            break;
            case "Add an Intern":
                intern()
            break;
            case "Add an engineer":
                engineer()
            break;

        }
    });
}

const manager = () => {
   inquire.prompt(managerQuestions)
   .then((response) => {
    let managerInput = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
    managerArr.push(managerInput);
    console.log(managerArr);

    doMenuQuestions();
   })
}

const intern = () => {
    inquire.prompt(internQuestions)
    .then((response) => {
     let internInput = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
     internArr.push(internInput);
        console.log(internArr);
     doMenuQuestions();
    })
 }

const engineer = () => {
    inquire.prompt(engineerQuestions)
    .then((response) => {
        const engineerInput = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
        engineerArr.push(engineerInput);
        console.log(engineerArr);
    doMenuQuestions();
    })
}

module.exports = {doMenuQuestions}