const inquire = require("inquirer");
const { managerQuestions, MainMenuQuestions, engineerQuestions, internQuestions } = require("./generateQuestions");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const fs = require("fs");
const { page, saveTemplate } = require("./buildPage");
const managerArr = [];
const internArr = [];
const engineerArr = [];
// imports and global variables

const doMenuQuestions = () => {
    inquire.prompt(managerQuestions)
        .then((response) => {
            let managerInput = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
            managerArr.push(managerInput);
            doMainMenuQuestions();  // ask manager questions first
        })
}

const doMainMenuQuestions = () => {
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
                case "Build my the team page":
                    buildPage();
                    break;
                default:
                    console.log("Switch case default");
            }
        });
}

const manager = () => {
    inquire.prompt(managerQuestions)
        .then((response) => {
            let managerInput = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
            managerArr.push(managerInput);

            doMainMenuQuestions();
        })
}

const intern = () => {
    inquire.prompt(internQuestions)
        .then((response) => {
            let internInput = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            internArr.push(internInput);
            doMainMenuQuestions();
        })
}

const engineer = () => {
    inquire.prompt(engineerQuestions)
        .then((response) => {
            const engineerInput = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
            engineerArr.push(engineerInput);
            doMainMenuQuestions();
        })
}

const buildPage = () => {
    saveTemplate();
    buildInternCard();
    buildEngineerCard();
    buildManagerCard();
    setTimeout(() => page(), 0500); // run after 0.5 secs
}

const buildInternCard = () => {
    for (let i = 0; i < internArr.length; i++) {
        const intern = internArr[i];
        const internCard =
            `
            <div class="card" style="width: 18rem;">
            <h4 class="card-header">Intern</h4>
            <div class="card-body">
              <h5 class="card-title">${intern.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Studied at:</h6>
              <p class="card-text">${intern.school}</p>
              <p class="card-text">ID: ${intern.id}</p>
              <p>Email: <a href="mailto: ${intern.email}" class="card-link">Email: ${intern.email}</a></p>
            </div>
          </div>`
        writeInternCard(internCard);
    }
}


const buildEngineerCard = () => {
    for (let i = 0; i < engineerArr.length; i++) {
        const engineer = engineerArr[i];
        const engineerCard =
            `
            <div class="card" style="width: 18rem;">
            <h4 class="card-header">Engineer</h4>
        <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Engineer id:</h6>
        <p class="card-text">${engineer.id}</p>
        <p>Github: <a href="https://github.com/${engineer.github}" class="card-link">${engineer.github}</a></p>
        <a href="mailto: ${engineer.email}" class="card-link">${engineer.email}</a>
        </div>
        </div>`
        writeEngineerCard(engineerCard);
    }
}

const buildManagerCard = () => {
    for (let i = 0; i < managerArr.length; i++) {
        const manager = managerArr[i];
        const managerCard =
            `
            <div class="card" style="width: 18rem;">
            <h4 class="card-header">Manager</h4>
            <div class="card-body">
              <h5 class="card-title">${manager.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Manager id:</h6>
              <p class="card-text">${manager.id}</p>
              <p class="card-text">Office number: ${manager.officeNumber}</p>
              <p>Email: <a href="mailto: ${manager.email}" class="card-link">${manager.email}</a></p>
            </div>
          </div>`
        writeManagerCard(managerCard);
    }
}

const writeInternCard = (internCard) => {
    fs.readFileSync("./templateHtml/template.html", "utf-8");
    fs.appendFile("./templateHtml/template.html", internCard, (err) => {
        err ? console.log(err) : console.log("Populating Intern Cards");
    }); // append to the end of the template file
}

const writeEngineerCard = (engineerCard) => {
    fs.readFileSync("./templateHtml/template.html", "utf-8");
    fs.appendFile("./templateHtml/template.html", engineerCard, (err) => {
        err ? console.log(err) : console.log("Populating Engineer Cards");
    });
}


const writeManagerCard = (managerCard) => {
    fs.readFileSync("./templateHtml/template.html", "utf-8");
    fs.appendFile("./templateHtml/template.html", managerCard, (err) => {
        err ? console.log(err) : console.log("Populating Manager Cards");
    });
}


module.exports = { engineerArr, managerArr, internArr, doMenuQuestions };