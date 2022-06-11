import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAnD2690ZhDDDNkZwA4UMJaBVHvdS5327U",
    auhDomain: "challenge-20c99.firebaseapp.com",
    projectId: "challenge-20c99",
    storageBucket: "challenge-20c99.appspot.com",
    messagingSenderId: "1093363460091",
    appId: "1:1093363460091:web:6971120cb23571cec50d5e",
    measurementId: "G-FZ6LEP0R0X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
