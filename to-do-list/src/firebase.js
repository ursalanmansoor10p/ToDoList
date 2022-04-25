import { initializeApp } from 'firebase/app';
// TIP: Do not import from firestorelite. Will cause many errors
import { getFirestore, collection, getDocs } from "firebase/firestore";

const config = require('./config');
const { db: { apiKey, authDomain, projectId , storageBucket, messagingSenderId, appId} } = config;

// The web applications Firebase configuration 
const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  // export db to skip repeated initializations 
  export { db };