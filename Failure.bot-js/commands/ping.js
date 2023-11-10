module.exports = {
  data: {
      name: 'ping',
      description: 'Check the bot\'s latency.',
  },
  async execute(interaction) {
      const startTime = Date.now();
      const endTime = Date.now();

      const latency = endTime - startTime;
      const apiLatency = interaction.client.ws.ping;

      const sentMessage = await interaction.reply({ content: `Pong! in ${latency}ms.`, fetchReply: true });
      sentMessage.reply(`API Latency is ${apiLatency}ms.`);
  },
};