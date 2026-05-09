importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSy...", // مفتاحك
    authDomain: "primedigitals-1802f.firebaseapp.com",
    projectId: "primedigitals-1802f",
    messagingSenderId: "774910246237",
    appId: "1:774910246237:web:866236b8a8b13d28913210"
});

const messaging = firebase.messaging();

// عرض الإشعار عند وصوله والتطبيق مغلق
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/logo.png' 
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});