const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
    ALIVE_IMG process.env.ALIVE_IMG||"https://files.catbox.moe/f2n59b.jpg"
ALIVE_MSG process.env.ALIVE_MSG||"*HELLO 👋, CORNEH CT is live💥
"        
};
