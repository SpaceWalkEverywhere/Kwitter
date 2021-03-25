function adduser() {
    username=document.getElementById("username").value;
    localStorage.setItem("username",username);
    window.location="kwitter_room.html";
}
function getun() {
    username=localStorage.getItem("username");
    document.getElementById("username").value=username;
}