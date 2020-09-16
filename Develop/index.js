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
        name: "Description",
        message: "Please Write a Short Descrption of your Project"
    },
    
    {
        type: "input",
        name: "Colab",
        message: "Please Provide name of indivduals contributing on Project."
    },

    {
        type: "list",
        name: "License",
        message: "What Kind of License Should your Project Have?",
        choices: ["MIT", "LLC", "GPL", "LGPL", "GFDL" ]
    },

    {
        type: "input",
        name: "Dependencies",
        message: "What Command Should be Run to Install Dependencies?",
        default: "npm install"
    },

    {
        type: "input",
        name: "test",
        message: "What Command Should be Run to Run Tests?",
        default: "npm run"
    },

    {
        type: "input",
        name: "repo",
        message: "What Does the User Need to Know about using the Repo"
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
    writeToFile(`readme.MD`, generate(answers));
    });
}

// function call to initialize program
init();