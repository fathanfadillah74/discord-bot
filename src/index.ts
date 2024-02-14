import { Client, IntentsBitField } from 'discord.js';
import handler from './handler/handler.ts';

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});


client.on('ready', () => {
    handler.userName(client)
});
client.on('messageCreate', (message) => {
    handler.messageCreate(message)
});
// client.on('typing', (typing) => {
//     handler.typingUser(typing)
// });

client.login("MTIwNTk2MTQyMjYwNTkxMDExNg.GWybf3.fMgfRK0HntWgRYFrC86q84KiNXkY2DzPzFWBic");
