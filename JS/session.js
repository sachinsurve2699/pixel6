
// Function to check if user is logged in

function isLoggedIn() {
    return sessionStorage.getItem("loggedIn") === "true";
}

function login() {
    sessionStorage.setItem("loggedIn", "true");    
}

function setusername(fullname,email,amount) {
    sessionStorage.setItem("name",fullname);
    sessionStorage.setItem("email",email);
    sessionStorage.setItem("amount",amount); 
}

// Function to handle logout
function logout() {
   sessionStorage.clear();
   window.location.href = "../HTML/index.html";
}

// Function to display username and logout button 

function displayuserinfo() {
    if (isLoggedIn()) {
        var username = sessionStorage.getItem("name");
        document.getElementById("userinfo").innerHTML = username;
    }
}

