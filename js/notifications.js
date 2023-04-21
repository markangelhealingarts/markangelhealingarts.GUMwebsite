// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

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

function getAlert() {
  alert("Here is your hourly reminder to Get Up and Move!");
  getTime();
}    
function getTime() {
  let current = new Date();
  let hour = current.getHours();
  let minute = current.getMinutes();
  let second = current.getSeconds();

  console.log(current);

  if ((minute == '00') && (second == '00')) {
      if (hour == 9 || hour == 10 || hour == 11 || 
      hour == 2 || hour == 3 || hour == 4) {
          getAlert();
      }
  } else {
      setTimeout(getAlert,(60*(60-minute)+(60-second))*1000);
  }

  if ((second == '00')) {
      getAlert();
  } else {
      setTimeout(getAlert,(60*(60-minute)+(60-second))*1000);
  }
}

myInterval = setInterval(getTime, 1000); //displays msg in 10 seconds