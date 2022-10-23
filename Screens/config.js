import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = { 
apiKey: "AIzaSyCuAMcuyPwYpJfzx0iyw2Y2qrA9BMlGgRg",
authDomain: "fir-test-73000.firebaseapp.com",
projectId: "fir-test-73000",
storageBucket: "fir-test-73000.appspot.com",
messagingSenderId: "291464082891",
appId: "1:291464082891:web:5bb869699a2bf4eefcb24e",
measurementId: "G-1NTF65VQYQ"
}  // apiKey, authDomain, etc. (see above)

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default getFirestore(app);