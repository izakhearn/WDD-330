function doFV() {
  //Check for valid input
  // INPUT
  let p = parseFloat(document.getElementById("principle").value);
  let pc = parseFloat(document.getElementById("conf-principle").value);
  let r = parseFloat(document.getElementById("annualrate").value);
  let n = parseInt(document.getElementById("periods").value);
  let y = parseInt(document.getElementById("years").value);
  
  if (isNaN(p) || isNaN(r) || isNaN(n) || isNaN(y)) {
    alert("All input must be valid numbers");
    return;
  }

  if (p !== pc) {
    alert("Principle and confirm principle must match");
    document.getElementById("principle").value = "";
    document.getElementById("conf-principle").value = "";
    return;
  }

  // PROCESSING
  let output = computeFutureValue(p, r, n, y);
  // OUTPUT with formatting
  document.getElementById("output").innerHTML = `$${output.toFixed(2)}`;
}

// computer future value function
// p = principal, r = annual rate, y = number of years, n = periods of year.

function computeFutureValue(p, r, n, y) {
  let er = r / n; // effective rate per period
  let totalperiods = n * y;
  return p * Math.pow(1 + er, totalperiods);
}

// get current year
let thedate = new Date();
document.getElementById("theyear").innerHTML = thedate.getFullYear();
