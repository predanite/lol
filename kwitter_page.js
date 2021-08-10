var firebaseConfig = {
      apiKey: "AIzaSyBcLRsW1537JyZKIe8kHR0hFPJcMq2cduE",
      authDomain: "chitter-ab786.firebaseapp.com",
      databaseURL: "https://chitter-ab786-default-rtdb.firebaseio.com",
      projectId: "chitter-ab786",
      storageBucket: "chitter-ab786.appspot.com",
      messagingSenderId: "1036980614606",
      appId: "1:1036980614606:web:e490deaba4af81d545279f"
    };
    firebase.initializeApp(firebaseConfig);
    uname = localStorage.getItem("user_name");
     rname =localStorage.getItem("room_name");

     function send() {
    msg =document.getElementById("msg").value
firebase.database().ref(rname).push({
      name:uname,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+ rname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();

function leave_page(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "kwitter_room.html"
}