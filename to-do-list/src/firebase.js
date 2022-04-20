import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from "firebase/firestore";


// The web applications Firebase configuration 
const firebaseConfig = {
    apiKey: "AIzaSyDSKYtnfrrW6iji2FaF36JiEMPyM1FrPPg",
    authDomain: "to-do-list-76a9f.firebaseapp.com",
    projectId: "to-do-list-76a9f",
    storageBucket: "to-do-list-76a9f.appspot.com",
    messagingSenderId: "753153106441",
    appId: "1:753153106441:web:4fa59aaf25bdb2dc418ed8"
  };

  const app = initializeApp(firebaseConfig);
  const firebasedb = getFireStore(app);

  export { firebasedb };