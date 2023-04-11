
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';



// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDopWyYoRR_X0jgUsWVLQA7yuT3DMZvFHg",
  authDomain: "eshop-1c936.firebaseapp.com",
  projectId: "eshop-1c936",
  storageBucket: "eshop-1c936.appspot.com",
  messagingSenderId: "958770196083",
  appId: "1:958770196083:web:f2c5503520d501e3814406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;
