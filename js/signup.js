// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection, addDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";


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

const signForm = document.getElementById("sign-form");
const signButton = document.getElementById("sign-form-submit");

signButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const username = signForm.username.value;
    const password = signForm.password.value;
    const password2 = signForm.password2.value;

    if(password != password2){
        alert('passwords are different');
        return
    }

    querySnapshot.forEach((doc) => {
      if(`${doc.id}` == username){
        alert('acount already exists')
        return
      }
    });

    // try{
    //     await setDoc(doc(db, "Users", 'jjjaaa'), {
    //         Password: 'tatatta'
    //     });

    //     console.log(nice);
    // }catch{
    //     console.log('error')
    // }
    await setDoc(doc(db, "Users", username), {
        Password: password
    });
    alert('success signed up!')
    window.location = '/pages/login.html';
})