import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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

const messageBox = document.getElementById("message-box");

function showMessage(msg){

messageBox.textContent = msg;
messageBox.style.display = "block";

setTimeout(()=>{
messageBox.style.display = "none";
},3000);

}

document.getElementById("signup-btn").addEventListener("click",()=>{

const name = document.getElementById("signup-name").value;
const email = document.getElementById("signup-email").value;
const phone = document.getElementById("signup-phone").value;
const password = document.getElementById("signup-password").value;

createUserWithEmailAndPassword(auth,email,password)

.then((userCredential)=>{

updateProfile(userCredential.user,{
displayName:name
});

showMessage("Account created successfully!");

setTimeout(()=>{

window.location.href="dashboard.html";

},2000);

})

.catch((error)=>{

showMessage(error.message);

});

});

