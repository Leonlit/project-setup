#! /usr/bin/env node
const {nodeConsoleApp} = require("./project-types/node-console-app");
const {nodeExpressApp} = require("./project-types/node-express-app");

const location = process.cwd();
const projectType = process.argv[2];

console.log(location);

const typesList = ["node-console-app", "node-express-app"];

switch (projectType) {
    case typesList[0]:
        nodeConsoleApp(location);
        break;
    case typesList[1]:
        nodeExpressApp(location);
        break;
}
//check which command choosed
//call files according to type

//link used to 