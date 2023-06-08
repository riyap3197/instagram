import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCndKf0MfarJpEhG_r5O21smRNI5Nd9uhM',
  authDomain: 'instagram-b4aa7.firebaseapp.com',
  projectId: 'instagram-b4aa7',
  storageBucket: 'instagram-b4aa7.appspot.com',
  messagingSenderId: '791310637636',
  appId: '1:791310637636:web:1c5ac8c916de07da067a11'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
