// array of questions for user

const inquirer = require('./node_modules/inquirer');
const fs = require('fs');
const generate = require("./utils/generateMarkdown");

        

const questions = [
    
    {
        type: "input",
        name: "Name",
        message: "What is your Name?"
    },


    {
        type: "input",
        name: "Username",
        message: "What is your GitHub Username?"
    },

    {
        type: "input",
        name: "Email",
        message: "What is your Email?"
    },
    
    {
        type: "input",
        name: "Title",
        message: "What is your Project Name?"
    },

    {
        type: "input",
        name: "Keywords",
        message: "Name a few Keywords about the Project"
    },

    {
        type: "input",
        name: "Description",
        message: "Please Write a Short Descrption of your Project"
    },

    {
        type: "checkbox",
        name: "Usage",
        message: "Which Programs did you use (Check all that apply)",
        choices: ["Node", "Javascript", "Package.JSON", "HTML", "CSS" ]
    },
    
    {
        type: "input",
        name: "Contributors",
        message: "Please Provide name of indivduals contributing on Project."
    },

    {
        type: "list",
        name: "License",
        message: "What Kind of License Should your Project Have?",
        choices: ["MIT", "LLC", "GPL", "LGPL", "GFDL", "None" ]
    },

    {
        type: "input",
        name: "Installation",
        message: "What Command Should be Run to Install Dependencies?",
        default: "npm install"
    },

    {
        type: "input",
        name: "Test",
        message: "What Command Should be Run to Run Tests?",
        default: "npm run"
    },

    {
        type: "input",
        name: "Recording",
        message: "Add URL of your Recording?",
    },

    {
        type: "input",
        name: "Screenshot",
        message: "Add URL of Screenshot"
    },

];

/// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            console.log(error);
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
    // generateMD(answers);
    writeToFile(`README.md`, generate(answers));
    });
}

// function call to initialize program
init();