import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUvP-N9Odu9PFK3laGQHz9Q4HPlWarsB4",
  authDomain: "st-peters-church-d2790.firebaseapp.com",
  projectId: "st-peters-church-d2790",
  storageBucket: "st-peters-church-d2790.firebasestorage.app",
  messagingSenderId: "744327394901",
  appId: "1:744327394901:web:3dcdf41a0dc64bdd1e06dc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("login-btn").addEventListener("click", () => {

const email = document.getElementById("login-email").value;
const password = document.getElementById("login-password").value;

signInWithEmailAndPassword(auth, email, password)

.then((userCredential) => {

alert("Login successful!");
window.location.href="dashboard.html";

})

.catch((error) => {

alert(error.message);

});

});