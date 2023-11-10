const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: ["Guilds", "GuildMembers", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessages", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping"] });

const { token } = require('./config.json');
const { loadCommands, deployCommands } = require('./commands/deployCommands');

const handleReadyEvent = require('./events/ready');

client.once('ready', () => {
  handleReadyEvent(client);
});

client.on('messageCreate', async (message) => {
  await deployCommands(message, pingCommand);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === pingCommand.data.name) {
      pingCommand.execute(interaction);
  }
});

client.login(token);