import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRrVYs_UfXcsXN4Csab1LDGt6QK-TZRoA",
  authDomain: "empmanagementapp-8b504.firebaseapp.com",
  projectId: "empmanagementapp-8b504",
  storageBucket: "empmanagementapp-8b504.appspot.com",
  messagingSenderId: "876202562520",
  appId: "1:876202562520:web:8e1a35e1cfb48365c158ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);