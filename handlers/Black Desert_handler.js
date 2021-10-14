const fs = require("fs");

module.exports = (client, Discord) =>{
    const command_files = fs.readdirSync("./Black Desert/").filter(file => file.endsWith(".js"));

    for(const file of command_files){
        const command = require(`../Black Desert/${file}`);
        if(command.name){
            client.commands.set(command.name, command);
        } else {
            continue;
        }
    }
}