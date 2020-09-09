#! /usr/bin/env node
const {nodeApp} = require("./project-types/nodeApp.js");

const location = process.cwd();

console.log(location);

nodeApp(location);
//check which command choosed
//call files according to type

//link used to 