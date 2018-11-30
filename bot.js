client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('517017264524886017').roles.find("name", "rainbow").setColor("RANDOM");
  };
  setInterval(lol, 1000);
});


client.login(process.env.BOT_TOKEN);