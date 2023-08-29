import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

  apiKey: "AIzaSyAKSXhCB_wEZ9Ajw_akclXcFXtQljcayY8",

  authDomain: "note-app-c4a83.firebaseapp.com",

  projectId: "note-app-c4a83",

  storageBucket: "note-app-c4a83.appspot.com",

  messagingSenderId: "1019570687117",

  appId: "1:1019570687117:web:89b77b0bdbe00ade82a6c4",

  measurementId: "G-NF222RZ7T4"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);