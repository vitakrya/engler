const Cryptify = require('cryptify');

const filePaths = ['./.env', './db.js']; // This can also be an array of paths.
const password = process.env.ENV_SECRET_KEY;

filePaths.forEach(filePath => {
    const instance = new Cryptify(filePath, password);
    instance
    .decrypt()
    .then((files) => {
        /* Do stuff */
    })
    .catch((e) => console.error(e));
});
