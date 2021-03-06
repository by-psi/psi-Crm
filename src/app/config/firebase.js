import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN, 
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// export default firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore;
const storage = firebase.storage;

export {
  storage, firestore, firebase as default
}