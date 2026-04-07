
let savedPic = localStorage.getItem("profilePic");

if(savedPic){

document.getElementById("profile-pic").src = savedPic;

}import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
getAuth, 
onAuthStateChanged, 
signOut 
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

onAuthStateChanged(auth,(user)=>{

if(user){

document.getElementById("user-name").textContent =
user.displayName || "Church Member";

document.getElementById("user-email").textContent =
user.email;

document.getElementById("user-id").textContent =
"Member ID: " + user.uid;

}

else{

window.location.href="login.html";

}

});

document.getElementById("user-name").textContent = user.displayName;
document.getElementById("user-email").textContent = user.email;

document.getElementById("upload-btn").addEventListener("click",()=>{

let fileInput = document.getElementById("upload-photo");

if(fileInput.files.length === 0){

alert("Please select a photo first");

return;

}

let file = fileInput.files[0];

let reader = new FileReader();

reader.onload = function(e){

document.getElementById("profile-pic").src = e.target.result;

localStorage.setItem("profilePic", e.target.result);

}

reader.readAsDataURL(file);

});