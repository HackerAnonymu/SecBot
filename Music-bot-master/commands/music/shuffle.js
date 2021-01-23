module.exports = {
    name: 'search',
    aliases: ['sr'],
    category: 'Music',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - ¡No estás en un canal de voz!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - ¡No estás en el mismo canal de voz!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Indique el título de una canción.`);

        client.player.play(message, args.join(" "));
    },
};