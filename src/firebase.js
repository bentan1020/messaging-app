import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAk6L5I64Gt02rhjMi8aqukBuhf4bIJ4vM",
    authDomain: "messaging-app-b0892.firebaseapp.com",
    projectId: "messaging-app-b0892",
    storageBucket: "messaging-app-b0892.appspot.com",
    messagingSenderId: "782002815039",
    appId: "1:782002815039:web:4907817311d8515770788a",
    measurementId: "G-1LT6CMJF82"
})

const db = firebaseApp.firestore()

const auth =  firebase.auth()

export { db, auth }