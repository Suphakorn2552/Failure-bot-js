const deployCommands = async (message, pingCommand) => {
  if (!message.guild) return;

  if (message.content === '!deploy') {
      const data = [pingCommand.data];

      const command = await message.guild.commands.set(data);
      console.log('Command deployed:', command);
  }
};

module.exports = deployCommands;