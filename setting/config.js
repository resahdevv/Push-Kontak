const fs = require("fs");
const chalk = require("chalk");

global.owner = ["6285742632270"];
global.author = "RezaDevv";
global.packname = "Push-Kontak";
global.sessionName = "Bot-Session";
global.versionbot = "1.2.0";
global.mess = {
    wait: "Loading...",
    success: "Operation Sucessfull!",
    owner: "Fitur Khusus Owner Bot",
    waitdata: "Melihat Data Terkini...",
    admin: "Fitur Khusus Admin Group!",
    private: "Fitur Khusus Private Chat!",
    group: "Fitur Digunakan Hanya Untuk Group!",
    botAdmin: "Bot Harus Menjadi Admin Terlebih Dahulu!",
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});