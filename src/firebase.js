import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL-8sWbKB_77scYl0QBeXRNTlDIM1Slq4",
  authDomain: "svelte-todo-6f8ac.firebaseapp.com",
  projectId: "svelte-todo-6f8ac",
  storageBucket: "svelte-todo-6f8ac.appspot.com",
  messagingSenderId: "636379534472",
  appId: "1:636379534472:web:2c1fa4ad925ed8cea93b3d",
  measurementId: "G-XGVWZB7PYW"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }