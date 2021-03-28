import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyACQvxT_lrFID8rled2x7oVlCAvHMzyhO8",
  authDomain: "unimeet-30884.firebaseapp.com",
  databaseURL: "https://unimeet-30884-default-rtdb.firebaseio.com",
  projectId: "unimeet-30884",
  storageBucket: "unimeet-30884.appspot.com",
  messagingSenderId: "1059696237910",
  appId: "1:1059696237910:web:d4ae3d744ac5b0ec034af7",
  measurementId: "G-30HP7BY9Y3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var auth = firebase.auth();

export default firebase;
export database
export auth
