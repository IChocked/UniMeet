/*
DOCS:
- Firebase.User: https://firebase.google.com/docs/reference/js/firebase.User
- firebase.auth.Error: https://firebase.google.com/docs/reference/js/firebase.auth.Error

*/



// @Param: email is a valid email, pass is a valid password according to Firebase requirements
function register(email, pass) {
  firebase.auth().createUserWithEmailAndPassword(email, pass)
  .then((userCredential) => {
    console.log("Success: register and sign in")
     let user = userCredential.user;
  })
  .catch((error) => {
    console.log(error.code)
    console.log(error.message)
    console.log(error)
  })
}


// @Param: email, password
function login(email, pass) {
  firebase.auth().signInWithEmailAndPassword(email, pass)
  .then((userCredential) => {
    console.log("Success: log in")
     let user = userCredential.user;
  })
  .catch((error) => {
    console.log(error.code)
    console.log(error.message)
    console.log(error)
  })
  .finally(() => {
    // populateUser("UCLA", "Shayla", ["ike", "hike", "hike", "hike", "hike"])
    // modifyInterests(["temp", "temp", "temp", "temp", "temp"])
    // retrieveMeetings()
    // addMeeting("VS1JszOo26WLtB2uo5wyAY0GE5c2", "2021-03-28T01:25:34Z", "zoom.whatever/12345")
  })
}


function logout() {
  firebase.auth().signOut().then(() => {
    console.log("Success: Sign Out")
  }).catch((error) => {
    console.log(error.code)
    console.log(error.message)
    console.log(error)
  });
}
