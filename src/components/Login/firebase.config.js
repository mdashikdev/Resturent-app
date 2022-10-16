// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWv40f4rZL72oedg2onW5qPT11qiRrbBY",
  authDomain: "resturent-app-379a1.firebaseapp.com",
  projectId: "resturent-app-379a1",
  storageBucket: "resturent-app-379a1.appspot.com",
  messagingSenderId: "363359996378",
  appId: "1:363359996378:web:11605b74ef53104de218e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);