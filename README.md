# push-notification-package

The Push Notification npm package simplifies the integration of push notification functionality in web applications

```
"dependencies": {
  "push-notification-package": "git+https://github.com/faizee-infobeans/push-notification-package"
}
```
After that run:
```
npm install
# or
npm i
```
# Firebase Cloud Messaging Setup
1. **Create a Firebase Account:**
Move to [Firebase Console](https://console.firebase.google.com/) and create an account if you don't have one. Once logged in, navigate to the project overview settings.

2. **Project Settings:**
In the project overview settings, locate the "Project Settings" section.

3. **Cloud Messaging Setup:**
Within the project settings, navigate to the "Cloud Messaging" tab. Enable Cloud Messaging to get the "Server Key". This key is crucial for sending push notifications

# Usages
Require the package in your JavaScript file and initialize PushNotifications with your Firebase Cloud Messaging (FCM) server key.
```const PushNotifications = require('push-notification-package');
const customPush = new PushNotifications('YOUR_FCM_SERVER_KEY');
```
**Sending Push Notifications:** Use the `sendNotification` method to send push notifications.
```
const deviceToken = 'device_token_here';
const notificationOptions = {
  title: 'New Message',
  body: 'You have a new message!'
};
customPush.sendNotification(deviceToken, notificationOptions)
  .then(response => console.log('Notification sent:', response))
  .catch(error => console.error('Error sending notification:', error));
```

# License
This package is licensed under the MIT License.
