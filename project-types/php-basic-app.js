const utility = require("../utilities");
const template = require("../template");

function phpBasicApp (fileLocation) {
    const fileName = [{name: "server.php", content: template.basicPhp},
                        ...template.getBasicWebAppFiles(),
                        {name: ".gitignore", content: "secret \n.env"}];

    utility.generateFiles(fileName, fileLocation);
}
module.exports = {phpBasicApp};