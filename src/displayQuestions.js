const inquire = require("inquirer");
const questions = require("./generateQuestions");

const doMenuQuestions = () => {
    inquire.prompt([questions.MainMenuQuestions[0]])
    .then((response) => {
        switch (response.options) {
            case "Add a manager":
               console.log("Hello");
            break;
        }
    });
}

doMenuQuestions();
