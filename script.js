function validate(){
    var logout = confirm("Are you sure you want to logout?");

    if(logout){
    window.location.assign("index.html");
    }
}