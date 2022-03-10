const { Client, Intents } = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  console.log(message.content);
});

client.login(process.env.APPLICATION_TOKEN);
