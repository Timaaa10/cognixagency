import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9b1MJTgEO-in7ucEsLvwQzOKCcCwGCIw",
  authDomain: "cognix-crm.firebaseapp.com",
  projectId: "cognix-crm",
  storageBucket: "cognix-crm.firebasestorage.app",
  messagingSenderId: "472981412516",
  appId: "1:472981412516:web:9487782bf58ae521f5a431"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);