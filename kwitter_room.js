const firebaseConfig = {
  apiKey: "AIzaSyC72h0G6GrU-0qQM1biQzjqrwTa0a-r2qQ",
  authDomain: "let-s-chat-app-800a3.firebaseapp.com",
  projectId: "let-s-chat-app-800a3",
  storageBucket: "let-s-chat-app-800a3.appspot.com",
  messagingSenderId: "962622187199",
  appId: "1:962622187199:web:37631b831636aadba6480a",
  measurementId: "G-CJH2QCB4HB"
};

user_name = localStorage.getItem("user_name").value;

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").childKey(room_name).update({
        purpose : "adding room name"

  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTMl += row;
  });
});

}

getData();


function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}