const handleReadyEvent = (client) => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity('Failure.js');
};

module.exports = handleReadyEvent;