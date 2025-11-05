import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD_a82rqNGRgvDDfpK-IU7F4mAs61t-OgI",
  authDomain: "project-cda85.firebaseapp.com",
  databaseURL: "https://project-cda85-default-rtdb.firebaseio.com",
  projectId: "project-cda85",
  storageBucket: "project-cda85.firebasestorage.app",
  messagingSenderId: "689894240814",
  appId: "1:689894240814:web:2f848921a5c9059b3c25bf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default firebaseConfig