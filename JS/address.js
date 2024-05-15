
// Function to submit address form

function formdetails() {
    var Fullname = document.getElementById("fullname").value;
    var Addressline1 = document.getElementById("addressline1").value;
    var Addressline2 = document.getElementById("addressline2").value;
    var City = document.getElementById("city").value;
    var State = document.getElementById("state").value;
    var Zip = document.getElementById("zip").value;
    var Country = document.getElementById("country").value;

    

    if (Fullname === "" || Addressline1 === "" || City === "" || State === "" || Zip === "" || Country === "") {
        alert("Please fill all fields");
        return false;
    }

    // Redirect to tenure page

    window.location.href = "../HTML/tenure.html";
}
