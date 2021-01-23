module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - ¡No estás en un canal de voz!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - ¡No estás en el mismo canal de voz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - ¡No hay música actualmente en reproducción!`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - ¡La música ya está sonando!`);

        client.player.resume(message);

        message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} resumed !`);
    },
};