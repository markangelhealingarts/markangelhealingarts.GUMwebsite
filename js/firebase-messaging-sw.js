importScripts('https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging.js');


const firebaseConfig = {
    apiKey: "AIzaSyBfagTE-ImAy1n1J6rdNMHmD3E886H8oQk",
    authDomain: "gum-android.firebaseapp.com",
    projectId: "gum-android",
    storageBucket: "gum-android.appspot.com",
    messagingSenderId: "462866559865",
    appId: "1:462866559865:web:533f931cb6a18cb31db5a8",
    measurementId: "G-K88BJV87S3"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = firebase.messaging(app);