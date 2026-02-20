function showLogin(){ 
    document.getElementById("loginForm").style.display = "flex";

    // Auto focus email when popup opens
    document.getElementById("email").focus();
}

function closeLogin(){
    document.getElementById("loginForm").style.display = "none";
}

function goLogin(){

    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let role = document.getElementById("role");

    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let roleValue = role.value;

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // EMAIL VALIDATION
    if(emailValue === ""){
        alert("Please enter email");
        email.focus();
        return;
    }

    if(!emailValue.match(emailPattern)){
        alert("Please enter valid email");
        email.focus();
        return;
    }

    // PASSWORD VALIDATION
    if(passwordValue === ""){
        alert("Please enter password");
        password.focus();
        return;
    }

    if(passwordValue.length < 6){
        alert("Password must be at least 6 characters");
        password.focus();
        return;
    }

    // ROLE VALIDATION
    if(roleValue === ""){
        alert("Please select role");
        role.focus();
        return;
    }

    // REDIRECT
    if(roleValue === "admin"){
        window.location.href = "admindashboard.html";
    }
    else if(roleValue === "teacher"){
        window.location.href = "teacherdash.html";
    }
    else if(roleValue === "student"){
        window.location.href = "studentdashboard.html";
    }
}