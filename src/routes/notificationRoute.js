
app.post('/send-notification', async (req, res) => {
    const pushTokens = ['ExponentPushToken[al_v3hGSjGTePjyyYBV1Up]'];
    const title = '¡He chanchin mira lo que anda esto!';
    const body = '¡Recontra puto el que lee!';
  
    const tickets = await expoNotification(pushTokens, title, body);
  
    res.json({ tickets });
  });