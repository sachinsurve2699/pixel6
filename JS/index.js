    
    // Function to validate form inputs

function submitform() {

    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var pan = document.getElementById("pan").value;
    var amount = document.getElementById("amount").value;

    var namecheck= /[A-Za-z]{4,}([ ][A-Za-z]{4,})+/;
    if (!fullname.match(namecheck)) {
        alert("Please enter a valid full name");
        return;
    }

    var emailcheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailcheck)) {
        alert("Please enter a valid email address");
        return;
    }

    var pancheck = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
    if (!pan.match(pancheck)) {
        alert("Please enter a valid PAN number");
        return;
    }

    if (amount <= 0 || amount.length > 9) {
        alert("Please enter a valid loan amount up to 9 digits");
        return;
    }

    setusername(fullname,email,amount);   //stored data to pass the values to a next page 
    window.location.href = '../HTML/confirm.html';   //After form submission the user is redirected to the confirmation page
}




function converttowords() {
    var number = document.getElementById("amount").value;
    var words = convert(number);
    document.getElementById("amountinWords").innerText = words;
}
     
 // Function to convert number into words

function convert(number) { 

    var units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    var tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    var teens = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

    var numarr = number.toString().split('');
    var numlength = numarr.length;

    if (numlength === 1) {
        return units[number];
    } else if (numlength === 2) {
        if (number < 20) {
            return teens[number % 10];
        } else {
            return tens[Math.floor(number / 10)] + ' ' + units[number % 10];
        }
    } else if (numlength === 3) {
        return units[Math.floor(number / 100)] + ' Hundred ' + convert(number % 100);
    } else if (numlength === 4) {
        return units[Math.floor(number / 1000)] + ' Thousand ' + convert(number % 1000);
    } else if (numlength === 5) {
        return convert(Math.floor(number / 1000)) + ' Thousand ' + convert(number % 1000);
    } else if (numlength === 6) {
        return units[Math.floor(number / 100000)] + ' Lakh ' + convert(number % 100000);
    } else if (numlength === 7) {
        return convert(Math.floor(number / 100000)) + ' Lakh ' + convert(number % 100000);
    } else if (numlength === 8) {
        return units[Math.floor(number / 10000000)] + ' Crore ' + convert(number % 10000000);
    } else if (numlength === 9) {
        return convert(Math.floor(number / 10000000)) + ' Crore ' + convert(number % 10000000);
    } else {
        return 'enter a valid loan amount up to 9 digits';
    }
}

