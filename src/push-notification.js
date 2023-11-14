const axios = require('axios');

class PushNotifications {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error('API key is required');
    }

    this.apiKey = apiKey;
    this.fcmEndpoint = 'https://fcm.googleapis.com/fcm/send';
  }

  async sendNotification(token, notification) {
    const payload = {
      to: token,
      notification
    };

    const headers = {
      'Authorization': `key=${this.apiKey}`,
      'Content-Type': 'application/json',
    };

    try {
      return await axios.post(this.fcmEndpoint, payload, { headers });
    } catch (error) {
      throw new Error('Invalid API key', error.message);
    }
  }
}

module.exports = PushNotifications;
