var firebaseConfig = {
apiKey: "AIzaSyCVWrQYrHjze_2rVDNuARf8eecp115Uq9U",
authDomain: "chatweb-53865.firebaseapp.com",
projectId: "chatweb-53865",
storageBucket: "chatweb-53865.appspot.com",
messagingSenderId: "889379280424",
appId: "1:889379280424:web:1275d6886e7a5e4864071d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      });});}
getData();
