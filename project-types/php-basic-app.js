const utility = require("../utilities");
const template = require("../template");

function phpBasicApp (fileLocation) {
    const fileName = [{name: "server.php", content: template.basicPhp},
                        ...template.getBasicWebAppFiles(),
                        {name: ".gitignore", content: "secret \n.env"}, 
                        {name: "README.md", content: ""}];

    utility.generateFiles(fileName, fileLocation);
}
module.exports = {phpBasicApp};