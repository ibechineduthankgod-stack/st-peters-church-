import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyDUvP-N9Odu9PFK3laGQHz9Q4HPlWarsB4",
authDomain: "st-peters-church-d2790.firebaseapp.com",
projectId: "st-peters-church-d2790",
storageBucket: "st-peters-church-d2790.firebasestorage.app",
messagingSenderId: "744327394901",
appId: "1:744327394901:web:3dcdf41a0dc64bdd1e06dc"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

document.getElementById("prayer-form").addEventListener("submit",async(e)=>{

e.preventDefault();

const name = document.getElementById("prayer-name").value;
const message = document.getElementById("prayer-message").value;

try{

await addDoc(collection(db,"prayers"),{

name:name,
message:message,
date:new Date()

});

document.getElementById("prayer-msg").textContent =
"Your prayer request has been received. Our church will pray with you.";

document.getElementById("prayer-form").reset();
console.log("Prayer submitted");
}

catch(error){

document.getElementById("prayer-msg").textContent =
error.message;

}

});