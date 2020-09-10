const basicHtml = 
`<!DOCTYPE html>
    <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta name='description' content=''>
            <meta name='keywords' content='HTMl, CSS, JS,'>
            <meta name='author' content='Leon Lit'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <link rel='icon' type='image/png' href='.png'/>
            <link rel="apple-touch-icon" sizes="180x180" href=".png">
            <link rel="shortcut icon" href=".ico" type="image/x-icon" >
            <meta name="theme-color" content="#">
            <meta name="msapplication-navbutton-color" content="#">
            <meta name="apple-mobile-web-app-status-bar-style" content="#">
            <title></title>
            <link rel='stylesheet' href='.css'>
        </head>
        <body>

        </body>
    </html>
    
<script src='.js'></script>
`

const basicWebAppFiles= [
    {name: "css"},
    {name: "css/mobile.css", content: ""},
    {name: "css/tablet.css", content: ""},
    {name: "css/desktop.css", content: ""},
    {name: "css/animations.css", content: ""},
    {name: "scripts"},
    {name: "scripts/main.js", content: "'use strict'\n"},
]

function getBasicWebAppFiles (path="", indexType= ".html") {
    return [
        {name: "README.md", content: ""},
        {name: `${path}assets`},
        {name: `${path}index${indexType}`, content: (indexType === ".html") ? basicHtml : basicPhp},
        {name: `${path}.htaccess`, content: ""},
        {name: `${path}css`},
        {name: `${path}css/mobile.css`, content: ""},
        {name: `${path}css/tablet.css`, content: ""},
        {name: `${path}css/desktop.css`, content: ""},
        {name: `${path}css/animations.css`, content: ""},
        {name: `${path}scripts`},
        {name: `${path}scripts/main.js`, content: "'use strict'\n"},
    ]
}

const basicPhp = `
<?php include_once("connection/conn.php");

?>
`

const mySQLConn = `
<?php
    define("HOST", "");
    define("SERVER_USERNAME", "");
    define("SERVER_PASSWORD", "");
    define("DB_NAME", "");
    define("DB_PORT", "");


    $conn = new mysqli(HOST, SERVER_USERNAME, SERVER_PASSWORD, DB_NAME, DB_PORT);

    // Check connection
    if ($conn -> connect_errno) {
        echo "Error when connecting the database server: " . $conn -> connect_error;
        exit();
    }
?>
`

module.exports = {getBasicWebAppFiles, basicHtml, basicPhp, mySQLConn};