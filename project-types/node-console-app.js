const utility = require("../utilities");
function nodeConsoleApp (fileLocation) {
    const fileName = [{name: "index.js", content: ""},
                        {name: "scripts"},
                        {name: "assets"},
                        {name: ".gitignore", content: "node_modules \n.env"}, 
                        {name: "README.md", content: ""}];

    utility.generateFiles(fileName, fileLocation);
}

module.exports = {nodeConsoleApp};