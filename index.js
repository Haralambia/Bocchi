const { Client, Intents } = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

const prefix = "bocchi gib ";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return false;

  if (message.content.startsWith(prefix)) {
    const cleanCommand = message.content.substring(prefix.length);
    const command = cleanCommand.split(" ");

    switch (command[0]) {
      case "wahaha": return message.channel.send("wahaha");
      default: return message.channel.send("bocchi confused");
    }
  }
});

client.login(process.env.APPLICATION_TOKEN);
