const fs = require("fs");

const page = () => {
    let templateHtml = fs.readFileSync("./templateHtml/template.html", "utf-8");
    fs.writeFileSync("./dist/teampage.html", templateHtml, "utf-8");
}

const saveTemplate = () => {
    let templateHtml = fs.readFileSync("./templateHtml/template.html", "utf-8");
    setTimeout(() => {
        fs.writeFileSync("./templateHtml/template.html", templateHtml, "utf-8");
    }, 2000)
}

module.exports = { page, saveTemplate }