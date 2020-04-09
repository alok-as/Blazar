import { initializeApp } from 'firebase/app'
import 'firebase/firestore'

// Configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAR_i2X8-wfjN1kpqtr3GSWy8ANNjOSUZ8',
  authDomain: 'blazar-backend.firebaseapp.com',
  databaseURL: 'https://blazar-backend.firebaseio.com',
  projectId: 'blazar-backend',
  storageBucket: 'blazar-backend.appspot.com',
  messagingSenderId: '220417063621',
  appId: '1:220417063621:web:dc237adb7812efc1cdceac',
  measurementId: 'G-Y9P801MQ92'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
// firebase.analytics();

export default firebaseApp.firestore()
