// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getMessaging, getToken } from "firebase/messaging";
import { getMessaging } from "firebase/messaging/sw";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "Users"));

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    let login = false;

    querySnapshot.forEach((doc) => {
      if(`${doc.id}` == username){
        if(`${doc.data().Password}` == password){
          login = true;
        }
      }
    });

    if(login){
      window.location = '/';
    }else{
      alert("wrong");
    }
})

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);
const tokenDivId = 'token_div';
const permissionDivId = 'permission_div';

function resetUI() {
  clearMessages();
  showToken('loading...');

  getToken(messaging, {vapidKey: "BAj2BusUqOOtYD4yKOVOPS6hII631Ze7xtrdHXt9iXT2fjdcHgU6Gp6Q4K3EvhAseYFqffokYhQxbyvSyJO3j2U"}).then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      sendTokenToServer(currentToken);
      updateUIForPushEnabled(currentToken);
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      updateUIForPushEnabled();
      setTokenSentToServer(false);
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    showToken('Error retrieving registration token. ', err);
    setTokenSentToServer(false);
  });
}

function showToken(currentToken) {
  const tokenElement = document.querySelector('#token');
  tokenElement.textContent = currentToken;
}

function sendTokenToServer(currentToken) {
  if (!isTokenSentToServer()) {
    console.log('Sending token to server...');
    setTokenSentToServer(true);
  } else {
    console.log('Token already sent to server so won\'t send it again ' + 'unless it changes');
  }
}

function isTokenSentToServer() {
  return window.localStorage.getItem('sentToServer') === '1';
}

function setTokenSentToServer(sent) {
  window.localStorage.setItem('sentToServer', sent ? '1' : '0');
}

function showHideDiv(divId, show) {
  const div = document.querySelector('#' + divId);
  if (show) {
    div.style = 'display: visible';
  } else {
    div.style = 'display: none';
  }
}

function appendMessage(payload) {
  const messagesElement = document.querySelector('#messages');
  const dataHeaderElement = document.createElement('h5');
  const dataElement = document.createElement('pre');
  dataElement.style = 'overflow-x:hidden;';
  dataHeaderElement.textContent = 'Received message:';
  dataElement.textContent = JSON.stringify(payload, null, 2);
  messagesElement.appendChild(dataHeaderElement);
  messagesElement.appendChild(dataElement);
}

// Clear the messages element of all children.
function clearMessages() {
  const messagesElement = document.querySelector('#messages');
  while (messagesElement.hasChildNodes()) {
    messagesElement.removeChild(messagesElement.lastChild);
  }
}

function updateUIForPushEnabled(currentToken) {
  showHideDiv(tokenDivId, true);
  showHideDiv(permissionDivId, false);
  showToken(currentToken);
}

function updateUIForPushPermissionRequired() {
  showHideDiv(tokenDivId, false);
  showHideDiv(permissionDivId, true);
}

resetUI();

messaging.onMessage(function(payload) {
  console.log('onMessage: ', payload)
  appendMessage(payload);
});