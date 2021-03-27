/*
TODO
	- figure out reading and writing to db
	- figure out basic authentication
  - potentially we could populate the db with valid universities, but for hackathon purposes might not be necessary and we could use a single school as an example

  Server-Side
  - Take request with a user token and return a matched user token
  - Take request with a string and return <=10 item array of interests with that started typed part
  - Take request with a string and return <=10 item array of universities

  - maintain a working live copy of the db in memory without retrieving the entire db on every new addition
*/

// @param: potential uni
// @description: make sure that the uni entered exists in the db to avoid single person uni's that won't have any matches
function validateUni(uni) {}

// @Param: valid university (a key in the db), name: string, interests: string array
function populateUser(uni, name, interests) {
  let user = auth.currentUser
  database.ref("Universities/" + uni + "/" + user.uid).set({
    Name: name,
    Interests: {
      0: interests[0],
      1: interests[1],
      2: interests[2],
      3: interests[3],
      4: interests[4]
    }
  })
}

login("bharde@me.com", "temP123@")

// let values = login("bharde@me.com", "temP123@")
// let user = values[0]
// let err = values[1]

// console.log(user)
// console.log(err)
