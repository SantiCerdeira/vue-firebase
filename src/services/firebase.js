import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDhMBhPmbgQxuUPETH_zw4HTwhKmfu519Q",
  authDomain: "cwm-2023-davinci.firebaseapp.com",
  projectId: "cwm-2023-davinci",
  storageBucket: "cwm-2023-davinci.appspot.com",
  messagingSenderId: "917571590777",
  appId: "1:917571590777:web:039abaabce695a29ead2a8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);   
const auth = getAuth(app)

export {
    app,
    db,
    auth
}