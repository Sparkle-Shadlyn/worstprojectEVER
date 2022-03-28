var firebaseConfig = {
      apiKey: "AIzaSyAEkTKbNmUXVgK-_bNBwXOPH66GgXM3RmQ",
      authDomain: "shadlyn-a933b.firebaseapp.com",
      databaseURL: "https://shadlyn-a933b-default-rtdb.firebaseio.com",
      projectId: "shadlyn-a933b",
      storageBucket: "shadlyn-a933b.appspot.com",
      messagingSenderId: "79045473504",
      appId: "1:79045473504:web:982df78ef04c60e2850c85"
    };
    firebase.initializeApp(firebaseConfig);
    
    
     user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML =" Welcome " + user_name+"!";
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
    } 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();




function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}