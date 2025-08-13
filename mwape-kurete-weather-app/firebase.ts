import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    /apiKey: "AIzaSyAsFnGJW_x6xLfLwY9jqV2a1m23KVc9vmE",
  authDomain: "dv300-classproj-2025.firebaseapp.com",
  projectId: "dv300-classproj-2025",
  storageBucket: "dv300-classproj-2025.firebasestorage.app",
  messagingSenderId: "388114222897",
  appId: "1:388114222897:web:7ee00a0cbd1f15ad3cea10"
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);

// Initialise Cloud Firestore and get a reference to the service
export const db = getFirestore(app);