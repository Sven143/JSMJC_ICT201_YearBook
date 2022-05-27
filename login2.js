function validate(){
    a = document.getElementById("username").value;
    b = document.getElementById("password").value;
    if(a == 'Admin' && b == '09876543'){
        window.location.href = "main.html";
    }
    else{
        alert("Login Failed");
    }   
}