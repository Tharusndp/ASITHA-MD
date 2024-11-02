const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "tvczjK7C#sVQQhRFxrOnXKritQRzPHPVsQ5o6I1fOfmactP-iNWc",
MONGODB: process.env.MONGODB || "mongodb://mongo:KrhFaJbJfKonuiMMuJfJctMHfeXxpINu@junction.proxy.rlwy.net:31135",//enter mongo db url
};
