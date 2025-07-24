import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCw5UZDMCzUjU5Lxu8MC4mm2snbMQ4uwvk",
  authDomain: "ordini-001.firebaseapp.com",
  projectId: "ordini-001",
  storageBucket: "ordini-001.appspot.com", 
  messagingSenderId: "856163383138",
  appId: "1:856163383138:web:835aee030cf2ce9b38de3b",
  databaseURL: "https://ordini-001-default-rtdb.firebaseio.com" 
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };
