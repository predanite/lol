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
  user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+ user_name;
function addroom(){
  room_name=document.getElementById("name_room").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding roomname"
  });
  localStorage.setItem("roome_name",room_name);
 window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirect(name){
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
window.location = "index.html"
}