import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDAGtpiUjNW44RmLoBdnf2hl-cR8PVi3zQ",
    authDomain: "ecommercecoderhouse.firebaseapp.com",
    databaseURL: "https://ecommercecoderhouse.firebaseio.com",
    projectId: "ecommercecoderhouse",
    storageBucket: "ecommercecoderhouse.appspot.com",
    messagingSenderId: "1008744454432",
    appId: "1:1008744454432:web:456d326e044574a05c1f45"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app)
}