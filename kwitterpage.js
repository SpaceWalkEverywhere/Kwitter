var firebaseConfig = {
      apiKey: "AIzaSyCVWrQYrHjze_2rVDNuARf8eecp115Uq9U",
      authDomain: "chatweb-53865.firebaseapp.com",
      databaseURL: "https://chatweb-53865-default-rtdb.firebaseio.com",
      projectId: "chatweb-53865",
      storageBucket: "chatweb-53865.appspot.com",
      messagingSenderId: "889379280424",
      appId: "1:889379280424:web:1275d6886e7a5e4864071d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    roomname=localStorage.getItem("rn");
    console.log(roomname);
    username=localStorage.getItem("username");
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;



      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name:username,
            msg:msg,
            likes:0
      });
      document.getElementById("msg").value="";
}



