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