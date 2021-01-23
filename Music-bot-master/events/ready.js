module.exports = async (client) => {
    console.log(`Estoy Listo ${client.guilds.cache.size} servidores, para un total de ${client.users.cache.size} usuarios`);

    client.user.setActivity(client.config.discord.activity);
};