import firebase from 'firebase/app'
import 'firebase/firestore'


 const firebaseConfig = {
   apiKey: "AIzaSyBINRAzy7XNMS4pU91PlqLdeE-vp0bBQ18",
   authDomain: "restaurants-8a3fa.firebaseapp.com",
   projectId: "restaurants-8a3fa",
   storageBucket: "restaurants-8a3fa.appspot.com",
   messagingSenderId: "53013228017",
   appId: "1:53013228017:web:aa40185ea6edd9dc247c50",
}
 
export const firebaseApp = firebase.initializeApp(firebaseConfig)