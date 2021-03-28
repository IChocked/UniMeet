import toast, { Toaster } from 'react-hot-toast'
const matchError = () => toast.error('Error finding a match.')

import { Link, Redirect, useHistory } from 'react-router-dom'
const history = useHistory()


// For getMatch() to detect when that match changes to a uid or error code
ValueEventListener changeListener = new ValueEventListener() {
  @Override
  public void onDataChange(DataSnapshot snapshot) {
    if (snapshot.exists()) {
      let match = snapshot.val()
      if (match == "-2") { // failed with error code
        // handle failure by throwing matchError() and pushing to home
        console.log("Error: server returned error code -2 on getMatch()")
        matchError()
        history.push('/homepage')
      } else { // succeeded with valid uid
        // handle success by adding match to list and pushing to matched
        console.log("Success: match with", match)
        let link = handleLink()
        addMeeting(match, "not_using_date", link)
        history.push('/matched')
        loadMatchToPage(match)
      }
    }
    else {
      console.log("Error: No data available on changeListener");
      matchError()
      history.push('/homepage')
    }

    // delete uid from the list
    removeSelfFromMatchQueue()

    // once done matching do this one on success
    history.push('/matched')
  }

  @Override
  public void onCancelled(DatabaseError databaseError) {
    matchError()
    history.push('/homepage')
  }
};


// the function that initiates the matching algorithm on the server
function getNewMatch() {
  // immedietely push to this screen
  history.push('/matching')

  // add uid to matching queue with -1 for match value
  addSelfToMatchQueue()
  // wait for match value to change to a uid or -2 for serverside matching error
  let uid = auth.user.uid
  ref = database.ref("matching/" + uid + "/match")
  ref.addValueEventListener(changeListener)
  // ref.removeEventListener(changeListener)
}

function loadMatchToPage(uid_meet) {
  loadMatchToPage(uid_meet, "matched-link", "matched-name")
}

function loadHomePage() {

}
