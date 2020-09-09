const fs = require("fs");

function generateFiles (fileName, fileLocation) {
    fileName.forEach(file => {
        const location = `${fileLocation}/${file.name}`;
        if (!fs.existsSync(location)) {
            if (file["name"].indexOf(".") === -1) {
                try {
                    fs.mkdirSync(location);
                    //createdFolder(file)
                }catch (err) {
                    console.log(`Failed to create folder ${file.name}`);
                    console.error(err);
                }
            }else {
                try {
                    fs.open(location, "w", (err, file) => {
                        if (err) {
                            throw err;
                        }
                    });
                    if (file.content) {
                        fs.writeFile(location, file.content, function (err) {
                            if (err){ 
                                throw err;
                            }
                        });
                    }
                    //createdFile(file);
                }catch (err) {
                    console.log(`Failed to create file ${file.name}`);
                    console.error(err);
                }
            }
        }else {
            console.log("File exists");
        }
    });
}

const basicHtml = 
`<!DOCTYPE html>
<html lang='en'>
    \t<head>
        \t\t<meta charset='UTF-8'>
        \t\t<meta name='description' content=''>
        \t\t<meta name='keywords' content='HTMl, CSS, JS,'>
        \t\t<meta name='author' content='Leon Lit'>
        \t\t<meta name='viewport' content='width=device-width, initial-scale=1.0'>
        \t\t<link rel='icon' type='image/png' href='.png'/>
        \t\t<title></title>
        \t\t<link rel='stylesheet' href='.css'>
    \t</head>
    \t<body>\t\t
    \t</body>
</html>\n
<script src=''></script>
`

module.exports = {generateFiles, basicHtml};