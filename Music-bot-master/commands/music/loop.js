module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - ¡No estás en un canal de voz!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - ¡No estás en el mismo canal de voz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - ¡No hay música actualmente en reproducción!`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`${client.emotes.success} - Modo de repetición ** deshabilitada **!`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`${client.emotes.success} - Modo de repetición ** habilitado ** ¡toda la cola se repetirá sin cesar!`);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`${client.emotes.success} -Modo de repetición ** habilitado ** ¡la música actual se repetirá sin cesar! !`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`${client.emotes.success} - Modo de repetición ** habilitado ** ¡la música actual se repetirá sin cesar!`);
            };
        };
    },
};