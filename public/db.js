/*
TODO
  - potentially we could populate the db with valid universities, but for hackathon purposes might not be necessary and we could use a single school as an example
  - read and write permissions on Firebase from all to logged in users

  Server-Side
  - Take request with a user token and return a matched user token
  - Take request with a string and return <=10 item array of interests with that started typed part
  - Take request with a string and return <=10 item array of universities

  - maintain a working live copy of the db in memory without retrieving the entire db on every new addition
*/

// @param: potential uni
// @description: make sure that the uni entered exists in the db to avoid single person uni's that won't have any matches
function validateUni(uni) {}

// @Param: valid university (a key in the db), name: string, interests: 5 string array
function populateUser(uni, name, interests) {
  let user = auth.currentUser
  database.ref("users/" + user.uid).set({
    name: name,
    university: uni,
    interests: {
      0: interests[0],
      1: interests[1],
      2: interests[2],
      3: interests[3],
      4: interests[4]
    }
  })
}

// TODO pass in a function so you can actually do something with the data retrieved
// @Param: uid of the user you want to retrieve (auth.currentUser.uid if current user)
function retrieveUser(uid) {
  database.ref().child("users").child(uid).get().then(function(snapshot) {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    }
    else {
      console.log("No data available");
    }
  }).catch(function(error) {
    console.error(error);
  });
}

// @Param: interests: 5 string array
function modifyInterests(interests) {
  let user = auth.currentUser
  database.ref("users/" + user.uid + "/interests").set({
    0: interests[0],
    1: interests[1],
    2: interests[2],
    3: interests[3],
    4: interests[4]
  })
}



login("bharde@me.com", "temP123@")
// retrieveUser("Zu5fWXfxl4V5cOGEGzoeoMA6tfA2")



// let values = login("bharde@me.com", "temP123@")
// let user = values[0]
// let err = values[1]

// console.log(user)
// console.log(err)