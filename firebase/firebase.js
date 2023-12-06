import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUsClJyIox4ePG4-GONSdaJkH3Zpz-5Yk",
  authDomain: "new-p-91bc5.firebaseapp.com",
  projectId: "new-p-91bc5",
  storageBucket: "new-p-91bc5.appspot.com",
  messagingSenderId: "841903650678",
  appId: "1:841903650678:web:07de22e084f433f5292c57"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
