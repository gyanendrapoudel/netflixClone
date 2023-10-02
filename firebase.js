import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyARGXscxnGCZ1l6xLObfZgz3YkfKBRCUaI',
  authDomain: 'netflix-clone-3f2e3.firebaseapp.com',
  projectId: 'netflix-clone-3f2e3',
  storageBucket: 'netflix-clone-3f2e3.appspot.com',
  messagingSenderId: '878784024510',
  appId: '1:878784024510:web:f75f5636ba0b086725f3ef',
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;