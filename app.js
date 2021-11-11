const config = require("./config.json");
const Discord = require('discord.js');

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS] });

client.on('ready', () => {
    console.log('Whisperer is online!');
});


client.login(config.token);