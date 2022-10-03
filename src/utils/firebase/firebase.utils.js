import { initializeApp } from 'firebase/app';
import {
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCUdDDSqyRr6WSS0oJnj6F4Iqsrr5rXzEo",
    authDomain: "crwn-clothing-db-e73a1.firebaseapp.com",
    projectId: "crwn-clothing-db-e73a1",
    storageBucket: "crwn-clothing-db-e73a1.appspot.com",
    messagingSenderId: "506732879521",
    appId: "1:506732879521:web:d16ee793741bc43c139ae0"
  };

    // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// provider is a class
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createuserDocumentFromAuth = async(userAuth) =>{
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  // console.log(userDocRef);
  // console.log(userSnapshot.exists());
  
  if (!userSnapshot.exists()){
    const { displayName, email} = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt
      })
    } catch (error){
      console.log("error creating user", error.message)
    }
  } 

  return userDocRef;
  
}

  
