module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - ¡No se está reproduciendo música en este servidor!`);
            break;
        case 'No conectado':
            message.channel.send(`${client.emotes.error} - ¡No estás conectado en ningún canal de voz!`);
            break;
        case 'No puede unirse':
            message.channel.send(`${client.emotes.error} - No puedo unirme a su canal de voz, ¡verifique mis permisos!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Algo salió mal ... Error : ${error}`);
    };
};
