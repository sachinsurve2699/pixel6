// Generate OTP

var otp = Math.floor(1000 + Math.random() * 9000);
console.log(otp)

var Name = sessionStorage.getItem("name")
var Email = sessionStorage.getItem("email")
var firstname = Name.split(" ", 1)

// Display first name and email of the user

document.getElementById("firstname").innerText = firstname;
document.getElementById("useremail").innerText = Email;

// Validate OTP 

var attempts = 0;
function validateotp() {
    var userotp = document.getElementById("otp").value.trim(); 
    if (userotp === otp.toString()) {                              // if user enters correct otp then redirect the user to Pixel6 home page
        document.getElementById("otp").style.display = "none";
        document.getElementById("button").style.display = "none";
        document.getElementById("message1").innerText = "Validation Sucess !!!";
        login();        
        window.location.href = "../HTML/address.html";
    } else {
        attempts++;                 // if a user fails to enter the correct otp in 3 attempt then redirect the user to Pixel6 404 page
        if (attempts === 3) {                                       
            document.getElementById("otp").style.display = "none"; 
            document.getElementById("button").style.display = "none";
            document.getElementById("message").innerText = "Validation Failed !!!";
            window.location.href = "https://pixel6.co/404";
        } else {
            alert("Invalid OTP Please try again");
            document.getElementById("otp").value = "";
        }
    }
}