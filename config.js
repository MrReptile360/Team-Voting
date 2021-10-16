import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD2i0hSqW1HNYZwye8jgM7r16B7X3dNl9E",
  authDomain: "teams-3dcf8.firebaseapp.com",
  databaseURL: "https://teams-3dcf8-default-rtdb.firebaseio.com",
  projectId: "teams-3dcf8",
  storageBucket: "teams-3dcf8.appspot.com",
  messagingSenderId: "1004606137989",
  appId: "1:1004606137989:web:994029998647db04bf2bec"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
