
const managerQuestions = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the team manager's id?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the team manager's office number?",
        name: "managerOffice"
    }
];

const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is the intern's id?",
        name: "internId"
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is the intern's school name?",
        name: "internSchool"
    }
];

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is the engineer's id?",
        name: "engineerId"
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is the engineer's github username?",
        name: "engineerGithub"
    }
];

const MainMenuQuestions = [
    {
        type: "list",
        message: "What you like to do?",
        name: "options",
        choices: ["Add a manager", "Add an engineer", "Add an Intern", "Build my the team page"]
    },
]

const questions = {
    managerQuestions,
    MainMenuQuestions,
    internQuestions,
    engineerQuestions
};

module.exports = (questions);