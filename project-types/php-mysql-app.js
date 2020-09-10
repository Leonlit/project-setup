const utility = require("../utilities");
const template = require("../template");

function phpMysqlApp (fileLocation) {
    const fileName = [{name: "connection"},
                        {name: "connection/conn.php", content: template.mySQLConn},
                        {name: "server.php", content: template.basicPhp},
                        ...template.getBasicWebAppFiles(),
                        {name: ".gitignore", content: "secret \n.env"}];

    utility.generateFiles(fileName, fileLocation);
}
module.exports = {phpMysqlApp};