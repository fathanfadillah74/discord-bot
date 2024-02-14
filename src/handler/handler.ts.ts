import { Client, Message, Typing } from "discord.js";

export default class handler {
    static async userName(client: Client) {
        try {
            if (client.user) {
                console.log(client.user.tag)
            }
        } catch (error) {
            console.log(`error on userName Handler:${error}`)
        }
    }

    static async messageCreate(message: Message) {
        try {
            if (message.author.bot) return;

            if (message.content.startsWith('!')) {
                const args = message.content.slice(1).trim().split(/ +/);
                const command = args.shift()?.toLowerCase();

                if (command === 'ping') {
                    message.reply('Pong!');
                } else if (command === 'hello') {
                    message.reply('Hi there!');
                }
            }
        } catch (error) {
            console.log(`error on messageCreate Handler:${error}`)
        }
    }

    static async typingUser(typing: Typing) {
        try {
            console.log(typing);
        } catch (error) {
            console.log(`error on typingUser Handler:${error}`)
        }
    }
}