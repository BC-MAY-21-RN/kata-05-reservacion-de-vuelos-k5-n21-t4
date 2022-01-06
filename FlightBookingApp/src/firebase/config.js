// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXDv9782-SNvB-kYT1gRlfnmSNlHPrPHo",
  authDomain: "kata05-eadc0.firebaseapp.com",
  projectId: "kata05-eadc0",
  storageBucket: "kata05-eadc0.appspot.com",
  messagingSenderId: "835672184485",
  appId: "1:835672184485:web:5d3a16ffe2e4f71e2fdf4c"
};

// Initialize Firebase
// const auth = app.auth()
const app = initializeApp(firebaseConfig);
const authh = getAuth(app);

export {authh, app}

