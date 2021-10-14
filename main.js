const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client();

const fs = require("fs");
const info_handler = require("./handlers/info_handler");

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

["command_handler", "event_handler", "info_handler", "Black Desert_handler"].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(process.env.DISCORD_TOKEN);
