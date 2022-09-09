// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBYaT_WTnirq35w-f9IBtYbjtU0fJ_fKzY",
    authDomain: "to-do-list-cb348.firebaseapp.com",
    projectId: "to-do-list-cb348",
    storageBucket: "to-do-list-cb348.appspot.com",
    messagingSenderId: "37027123756",
    appId: "1:37027123756:web:716784b70665c54c7ef789",
    measurementId: "G-99PK4LDYZC"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  export { db }