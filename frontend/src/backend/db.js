import toast, { Toaster } from 'react-hot-toast'
const loadMeetingToPageError = () => toast.error('Error failed to load meeting link to page.')
const noMeetingsError = () => toast.error('Error no registered meetings in db.')

import { Link, Redirect, useHistory } from 'react-router-dom'
const history = useHistory()


// @Param: valid university (a key in the db), name: string, interests: 5 string array
export function populateUser(uni, name, interests) {
  // push invalid interests to bypass index out of bound
  // will need to compensate for this in match.py (serverside matching script)
  if (interests.length < 5) {
    for (var i = 0; i < 5 - interests.length; i++) {
      interests.push("-1")
    }
  }
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

export function addSelfToMatchQueue() {
  let user = auth.currentUser
  database.ref("matching/" + user.uid).set({
    match: "-1"
  })
}

export function removeSelfFromMatchQueue() {
  let user = auth.currentUser
  database.ref("matching/" + user.uid).remove()
}

// TODO pass in a export function so you can actually do something with the data retrieved
// @Param: uid of the user you want to retrieve (auth.currentUser.uid if current user)
export function retrieveUser(uid) {
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

// TODO figure out how to do the matched name
export function loadMeetingToPage(uid_meet, link_id, name_id) {
  console.log(uid_meet, link_id, name_id)
  database.ref().child("users").child(auth.currentUser.uid).child("meetings").get().then(function(snapshot) {
    if (snapshot.exists()) {
      let meets = snapshot.val()
      let uids = Object.keys(meets)
      for (var i = 0; i < uids.length; i++) {
        let uid = uids[i]
        if (uid == uid_meet) {
          let link = meets[uid].link
          let date = meets[uid].date
          console.log(link, date)

          document.getElementById(link_id).value = link
        }
      }
    }
    else {
      console.log("Notice: No meetings!");
      noMeetingsError()
    }
  }).catch(function(error) {
    console.error(error);
    loadMeetingToPageError()
  });
}


// @Param: uid is the id of the person you matched with, date is the ISO8061 string for date and time, link is the link to the meeting
export function addMeeting(uid, date, link) {
  let user = auth.currentUser
  // add the event for the current user
  database.ref("users/" + user.uid + "/meetings/" + uid).set({
    date: date,
    link: link
  })
  // add the event for the match
  database.ref("users/" + uid + "/meetings/" + user.uid).set({
    date: date,
    link: link
  })
}

// @Param: interests: 5 string array
export function modifyInterests(interests) {
  // push invalid interests to bypass index out of bound
  // will need to compensate for this in match.py (serverside matching script)
  if (interests.length < 5) {
    for (var i = 0; i < 5 - interests.length; i++) {
      interests.push("-1")
    }
  }
  let user = auth.currentUser
  database.ref("users/" + user.uid + "/interests").set({
    0: interests[0],
    1: interests[1],
    2: interests[2],
    3: interests[3],
    4: interests[4]
  })
}


// login("test@gmail.com", "doesn'tmatter123^")
// login("bharde@me.com", "temP123@")
// retrieveUser("Zu5fWXfxl4V5cOGEGzoeoMA6tfA2")



// let values = login("bharde@me.com", "temP123@")
// let user = values[0]
// let err = values[1]

// console.log(user)
// console.log(err)
