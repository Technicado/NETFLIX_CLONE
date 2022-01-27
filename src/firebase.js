import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-RtqsifKnNdh6TkkixB_kSIZYsuxwcCE",
  authDomain: "netflix-clone-d7f37.firebaseapp.com",
  projectId: "netflix-clone-d7f37",
  storageBucket: "netflix-clone-d7f37.appspot.com",
  messagingSenderId: "885332140695",
  appId: "1:885332140695:web:5a6c7e7169829d6d3a3fd2",
  measurementId: "G-BLSD874V4X",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
