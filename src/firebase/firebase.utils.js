import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { FIREBASE_CONFIG } from './config'

const config = FIREBASE_CONFIG;

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

// firestore.collection('collection_name').doc('id').collection('embedded_collection_name').doc('emb_id');
// firestore.collection('users').doc('BGy8b4J2ghCKiz9izSrg').collection('cartItems').doc('KDsZg94i3ubWCSgt3PUn');
// firestore.doc('users/BGy8b4J2ghCKiz9izSrg/cartItems/KDsZg94i3ubWCSgt3PUn');
// firestore.collection('users/BGy8b4J2ghCKiz9izSrg/cartItems');

// access to auth lib
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch (error) {
            console.log("error created user", error.message);
        }
    }

    return userRef;
}