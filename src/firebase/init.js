import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAyXKDn0NaNDDS3MCfZv73XU2CaNlpKxA8",
    authDomain: "peter-vue-chat.firebaseapp.com",
    projectId: "peter-vue-chat",
    storageBucket: "peter-vue-chat.appspot.com",
    messagingSenderId: "321773562568",
    appId: "1:321773562568:web:09095ff6497e1eed0a93fd",
    measurementId: "G-KVT414SKBB"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
export default firebaseApp.firestore()