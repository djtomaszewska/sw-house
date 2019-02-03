function login_fun(){
var user = document.getElementById("log_in").value;
var pass = document.getElementById("pass_word").value;
if(user == "admin" && pass == "admin") {
    alert("Logged In");
    locate="dashboard.html"
    return false;
} else {
    alert("Wrong login or password");
    return false;
    }
}
