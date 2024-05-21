let usersave = JSON.parse(localStorage.getItem("User"));

const googleLogin = document.getElementById("login");
const pfp = document.getElementById("pfp");

if(usersave) {

pfp.src = usersave.profileURL
pfp.style.display = "flex";
googleLogin.style.display = "none";

} else {
 googleLogin.style.opacity = 0.8;
 googleLogin.style.borderColor = "darkgray"
}