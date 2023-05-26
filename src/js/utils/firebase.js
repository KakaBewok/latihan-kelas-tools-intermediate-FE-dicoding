// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDLMq4YQ3hWpca8mJSJj5yfDOvabmcSblc',
  authDomain: 'money-tracker-app-a4304.firebaseapp.com',
  projectId: 'money-tracker-app-a4304',
  storageBucket: 'money-tracker-app-a4304.appspot.com',
  messagingSenderId: '75427835994',
  appId: '1:75427835994:web:f2cbb81bae609af4b4e863',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { app, auth, db, storage };
