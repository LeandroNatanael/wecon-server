import { Expo } from 'expo-server-sdk';

const expo = new Expo();

async function expoNotification(pushTokens, title, body) {
    const messages = pushTokens.map(pushToken => ({
        to: pushToken,
        sound: 'default',
        title: title,
        body: body,
    }));

    const chunks = expo.chunkPushNotifications(messages);
    let tickets = [];

    for (const chunk of chunks) {
        try {
            const ticketChunk = await expo.sendPushNotificationsAsync(chunk);
            tickets.push(...ticketChunk);
        } catch (error) {
            console.error('Error al enviar notificación:', error);
        }
    }

    return tickets;
}

export default expoNotification;
