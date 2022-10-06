
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDILGmVVBuQe_NWmf_pkTICDZbnOG3J8Ak",
  authDomain: "devdeakin-aac7b.firebaseapp.com",
  projectId: "devdeakin-aac7b",
  storageBucket: "devdeakin-aac7b.appspot.com",
  messagingSenderId: "377534182587",
  appId: "1:377534182587:web:311dbe43c7be6b58d7a59e",
  measurementId: "G-JVVY771HFR"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const storage = getStorage(app);
export default getFirestore();
export {auth, storage}