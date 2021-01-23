module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title}ha sido agregado a la cola (**${playlist.tracks.length}** canciones) !`);
};