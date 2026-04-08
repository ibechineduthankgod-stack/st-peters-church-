
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

const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("profileImage");
const preview = document.getElementById("profilePreview");

uploadBtn.addEventListener("click", async () => {

const file = fileInput.files[0];

if(!file){
alert("Please select a photo first");
return;
}

const formData = new FormData();
formData.append("file", file);
formData.append("upload_preset", "profile-upload");

try {

const response = await fetch(
"https://api.cloudinary.com/v1_1/dxjjz9qid/image/upload",
{
method: "POST",
body: formData
}
);

const data = await response.json();

console.log(data);

preview.src = data.secure_url;

alert("Profile photo uploaded successfully!");

} catch (error) {

console.error("Upload failed:", error);

}

});