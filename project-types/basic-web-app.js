const utility = require("../utilities");
const template = require("../template");

function basicWebApp (fileLocation) {
    const fileName = [...template.getBasicWebAppFiles(),
                        {name: ".gitignore", content: "secret"}, 
                        {name: "README.md", content: ""}];

    utility.generateFiles(fileName, fileLocation);
}
module.exports = {basicWebApp};