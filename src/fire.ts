import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDu6BqW2RNckiBNoeKjg94lzak3rIwp_cQ",
  authDomain: "timer-app-9bd8d.firebaseapp.com",
  projectId: "timer-app-9bd8d",
  storageBucket: "timer-app-9bd8d.appspot.com",
  messagingSenderId: "397591021174",
  appId: "1:397591021174:web:fedc80a3b978348c178157"
};

// const fire = firebase.initializeApp(firebaseConfig)
const fire = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export const db = firebase.database()

export default fire
