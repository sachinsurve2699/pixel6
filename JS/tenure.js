
    // Function to calculate EMI

function calculate() {
    var tenure = document.getElementById("tenure").value;    
    var loanamount = sessionStorage.getItem("amount")
    var interestrate ;
    
    switch (tenure) {
        case "1":
            interestrate = 8;
            break;
        case "2":
            interestrate = 10;
            break;
        case "3":
            interestrate = 12;
            break;
        case "4":
            interestrate =15;
            break;
        case "5":
            interestrate = 18;
            break;
        default:
            interestrate = 22;
    }

    if (isNaN(loanamount)) {
      alert("Please enter a valid loan amount.");
      return;
    }
  
    var months = tenure * 12;
    var monthlyinterestrate = interestrate * 0.01;
    var interest = (loanamount * monthlyinterestrate) / months;
    var total = (loanamount / months) + interest;
  
    document.getElementById("emi").innerHTML = "₹" + total.toFixed(2) + " per month";
  }
 
  