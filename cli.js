#! /usr/bin/env node
const {nodeConsoleApp} = require("./project-types/node-console-app");
const {nodeExpressApp} = require("./project-types/node-express-app");
const {basicWebApp} = require("./project-types/basic-web-app");
const {phpMysqlApp} = require("./project-types/php-mysql-app");
const {herokuBasicPhp} = require("./project-types/heroku-basic-php");

const location = process.cwd();
const projectType = process.argv[2];


const typesList = ["node-console-app",
                    "node-express-app",
                    "basic-web-app",
                    "php-basic-app",
                    "php-mysql-app",
                    "heroku-basic-php"
                ];

if (projectType === undefined) {
    console.log("Error!!! Expected user to provide the program with one arguments to specify the types of project to generate files and folder for.\n");
    displayProjectTypes();
}else {
    console.log(location);
    switch (projectType) {
        case typesList[0]:
            nodeConsoleApp(location);
            break;
        case typesList[1]:
            nodeExpressApp(location);
            break;
        case typesList[2]:
            basicWebApp(location);
            break;
        case typesList[3]:
            basicWebApp(location);
            break;
        case typesList[4]:
            phpMysqlApp(location);
            break;
        case typesList[5]:
            herokuBasicPhp(location);
            break;
        default:
            console.log("Invalid arguments!!! Please make sure the project types are correct. \n");
            displayProjectTypes();
    }
}

function displayProjectTypes () {
    console.log("To generate files and folders for specific type of project, please provide one of the types of the projects provided below:\n");
    let list = "";
    typesList.forEach(type => {
        list += `${type} | `;
    });
    console.log(list, "\n");
}
//check which command choosed
//call files according to type

//link used to 