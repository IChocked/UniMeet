/*
DOCS:
- Firebase.User: https://firebase.google.com/docs/reference/js/firebase.User
- firebase.auth.Error: https://firebase.google.com/docs/reference/js/firebase.auth.Error

*/

// for the page changing and errors
import toast, { Toaster } from 'react-hot-toast'
const loginError = () => toast.error('Invalid email address or password.')
// can get more advanced with error codes here but for hacky purposes just generic error
  // See https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createuserwithemailandpassword for specific error codes to notify the user of
const registrationError = () => toast.error('Registration failed.')

import { Link, Redirect, useHistory } from 'react-router-dom'
const history = useHistory()

// @Param: email is a valid email, pass is a valid password according to Firebase requirements
export function register(email, pass, name) {
  firebase.auth().createUserWithEmailAndPassword(email, pass)
  .then((userCredential) => {
    console.log("Success: register and sign in")
     let user = userCredential.user;
     populateUser('UCLA', name, []) // pass in empty interests for now because will be populated on the next page
     history.push('/interests')
  })
  .catch((error) => {
    console.log(error.code)
    console.log(error.message)
    console.log(error)
    registrationError()
  })
}


// @Param: email, password
export function login(email, pass) {
  firebase.auth().signInWithEmailAndPassword(email, pass)
  .then((userCredential) => {
    console.log("Success: log in")
     let user = userCredential.user;
     history.push('/homepage')
  })
  .catch((error) => {
    console.log(error.code)
    console.log(error.message)
    console.log(error)
    loginError()
  })
  .finally(() => {
    // populateUser("UCLA", "Shayla", ["ike", "hike", "hike", "hike", "hike"])
    // modifyInterests(["temp", "temp", "temp", "temp", "temp"])
    // retrieveMeetings()
    // addMeeting("VS1JszOo26WLtB2uo5wyAY0GE5c2", "2021-03-28T01:25:34Z", "zoom.whatever/12345")
  })
}


export function logout() {
  firebase.auth().signOut().then(() => {
    console.log("Success: Sign Out")
  }).catch((error) => {
    console.log(error.code)
    console.log(error.message)
    console.log(error)
  });
}
