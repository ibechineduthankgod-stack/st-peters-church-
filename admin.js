import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
getDocs
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

async function loadPrayers(){

const querySnapshot = await getDocs(collection(db,"prayers"));

let container = document.getElementById("prayer-list");

querySnapshot.forEach((doc)=>{

let data = doc.data();

container.innerHTML +=

`<div class="prayer-card">
<h4>${data.name}</h4>
<p>${data.message}</p>
</div>`;

});

}

loadPrayers();