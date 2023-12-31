const fs = require('fs');

function logreqres(filename) {
    return (req, res, next) => {

        fs.appendFile(
            filename,
            `\n${Date.now()}:${req.ip} ${req.method}: ${req.path}\n`,
            (err, data) => {
                console.log("Error")
            }
        );
        next();
    };
}

module.exports = { logreqres, }