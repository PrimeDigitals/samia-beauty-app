// استدعاء مكتبات فايربيز داخل الـ Service Worker
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js');

// إعدادات المشروع (نفس الإعدادات الموجودة في index.html)
const firebaseConfig = {
    apiKey: "ضع_مفتاح_API_الخاص_بك_هنا",
    authDomain: "primedigitals-1802f.firebaseapp.com",
    projectId: "primedigitals-1802f",
    storageBucket: "primedigitals-1802f.appspot.com",
    messagingSenderId: "774910246237",
    appId: "1:774910246237:web:866236b8a8b13d28913210"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// التعامل مع الإشعارات عندما يكون التطبيق في الخلفية
messaging.onBackgroundMessage((payload) => {
  console.log('وصل إشعار في الخلفية: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.png' // تأكد من وجود صورة بهذا الاسم أو ضع رابط صورة شعارك
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});