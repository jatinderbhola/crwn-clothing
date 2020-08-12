import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBNFizGCRFJCzvLRXP7xP3yGUrKx1YlH-I",
    authDomain: "crwn-db-5ff60.firebaseapp.com",
    databaseURL: "https://crwn-db-5ff60.firebaseio.com",
    projectId: "crwn-db-5ff60",
    storageBucket: "crwn-db-5ff60.appspot.com",
    messagingSenderId: "850062146207",
    appId: "1:850062146207:web:7837b51ff73801d66180aa",
    measurementId: "G-BKSHXDR9BX"
};

firebase.initializeApp(config);


export const auth = firebase.auth();

export const firestore = firebase.firestore();

// access to auth lib
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;