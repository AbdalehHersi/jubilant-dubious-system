const fs = require("fs");

const saveTemplate = () => {
    let templateHtml = fs.readFileSync("./templateHtml/template.html", "utf-8");
    setTimeout(() => {
        fs.writeFileSync("./templateHtml/template.html", templateHtml, "utf-8");
    }, 1000)
}

const page = () => {
    console.log("Building Page");
    let templateHtml = fs.readFileSync("./templateHtml/template.html", "utf-8");
    fs.writeFileSync("./dist/teampage.html", templateHtml + `</body>
    </html>`, "utf-8");
    console.log("Page built. Success")
}


module.exports = { page, saveTemplate }