/*Slideshow javascript*/

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

/*Payment address form javascript validation*/

function payAddName() {
  var n = document.getElementById("pafullName").value;
  if (n.length >= 4 && n.length <= 25) {
    var i;
    var flag = 0;
    for (i = 0; i < n.length; i++) {
      if (n.charAt(i) >= '0' && n.charAt(i) <= '9') {
        flag++;
      }
    }
    if (flag == 0) {
      document.getElementById("paName").style.color = "green";
      document.getElementById("paName").innerHTML = "Valid";
      return true;
    } else {
      document.getElementById("paName").style.color = "red";
      document.getElementById("paName").innerHTML = "Name should not contain digits";
      return false;
    }
  } else {
    document.getElementById("paName").style.color = "red";
    document.getElementById("paName").innerHTML = "Please enter 4-25 characters";
    return false;
  }
}

function payAddPhone() {
  var p = document.getElementById("paPhone").value;
  if (p.length == 10) {
    document.getElementById("paSphone").style.color = "green";
    document.getElementById("paSphone").innerHTML = "Valid";
    return true;
  } else {
    document.getElementById("paSphone").style.color = "red";
    document.getElementById("paSphone").innerHTML = "Mobile Number should contain 10 digits";
    return false;
  }
}

function payAddPincode() {
  var p = document.getElementById("pin").value;
  if (p.length == 6) {
    document.getElementById("spin").style.color = "green";
    document.getElementById("spin").innerHTML = "Valid";
    return true;
  } else {
    document.getElementById("spin").style.color = "red";
    document.getElementById("spin").innerHTML = "Pincode contains 6 digits";
    return false;
  }
}
/*payment gateway form javascript validation*/

function payGateName()
{
  var n = document.getElementById("pgName").value;
  if(n.length >= 4 && n.length <= 25)
  {
    var i;
    var flag = 0;
    for(i = 0; i < n.length; i++)
    {
      if(n.charAt(i) >= '0' && n.charAt(i) <= '9')
        flag++;
    }
    if(flag == 0)
    {
      document.getElementById("pgSname").style.color = "green";
      document.getElementById("pgSname").innerHTML = "valid";
    }
    else
    {
      document.getElementById("pgSname").style.color = "red";
      document.getElementById("pgSname").innerHTML = "*Name should not contain digits*";
    }
  }
  else
  {
    document.getElementById("pgSname").style.color = "red";
    document.getElementById("pgSname").innerHTML = "*Please enter 4-25 characters*";
  }
}

function payGateCard()
{
  var n = document.getElementById("card").value;
  if(n.length == 16)
  {
    document.getElementById("scard").style.color = "green";
    document.getElementById("scard").innerHTML = "valid";
  }
  else
  {
    document.getElementById("scard").style.color = "red";
    document.getElementById("scard").innerHTML = "*Please enter 16 digit card number*";
  }
}

/*Add to cart js*/
 function addToCart()
 {
   alert("Item has been added to cart. :)");
 }
/*Sign up form javascript validation*/

function signName() {
  var n = document.getElementById("Suser").value;
  if (n.length >= 4 && n.length <= 25) {
    var i;
    var flag = 0;
    for (i = 0; i < n.length; i++) {
      if (n.charAt(i) >= '0' && n.charAt(i) <= '9')
        flag++;
    }
    if (flag == 0) {
      document.getElementById("Susername").style.color = "green";
      document.getElementById("Susername").innerHTML = "valid";
    } else {
      document.getElementById("Susername").style.color = "red";
      document.getElementById("Susername").innerHTML = "Name should not contain digits";
    }
  } else {
    document.getElementById("Susername").style.color = "red";
    document.getElementById("Susername").innerHTML = "Please enter 4-25 characters";
  }
}

function signPhone() {
  var p = document.getElementById("mobileNumber").value;
  if (p.length == 10) {
    document.getElementById('mobileno').style.color = "green";
    document.getElementById('mobileno').innerHTML = "Valid";
    return true;
  } else {
    document.getElementById('mobileno').style.color = "red";
    document.getElementById('mobileno').innerHTML = "Mobile Number should contain 10 digits";
    return false;
  }
}

function signEmail() {
  var p = document.getElementById("emails").value;
  if (p == "") {
    document.getElementById('emailids').style.color = "red";
    document.getElementById('emailids').innerHTML = "Please fill the email id field";
    return false;
  }
  if (p.indexOf('@') <= 0) {
    document.getElementById('emailids').style.color = "red";
    document.getElementById('emailids').innerHTML = "'@' at Invalid Position";
    return false;
  }

  if ((p.charAt(p.length - 4) != '.') && (p.charAt(p.length - 3) != '.')) {
    document.getElementById('emailids').style.color = "red";
    document.getElementById('emailids').innerHTML = " '.' at Invalid Position";
    return false;

  } else {
    document.getElementById('emailids').style.color = "green";
    document.getElementById('emailids').innerHTML = "Valid";
    return true;

  }

}

function signPass() {


  var pass = document.getElementById("Spass").value;
  if (pass == "") {
    document.getElementById('passwords').style.color = "red";
    document.getElementById('passwords').innerHTML = " ** Please fill the password field";
    return false;
  }
  if ((pass.length < 5) || (pass.length > 20)) {
    document.getElementById('passwords').style.color = "red";
    document.getElementById('passwords').innerHTML = " ** Passwords lenght must be between  5 and 20";
    return false;
  } else {
    document.getElementById('passwords').style.color = "green";
    document.getElementById('passwords').innerHTML = "Valid";
    return true;

  }
}

function signConfirmPass() {
  var confirmpass = document.getElementById("conpass").value;
  var pass = document.getElementById("Spass").value;
  if (confirmpass == "") {
    document.getElementById('confrmpass').style.color = "red";
    document.getElementById('confrmpass').innerHTML = " ** Please confirm your password **";
    return false;
  } else if (confirmpass == pass) {
    document.getElementById('confrmpass').style.color = "green";
    document.getElementById('confrmpass').innerHTML = "Valid";
    return true;
  } else {
    document.getElementById('confrmpass').style.color = "red";
    document.getElementById('confrmpass').innerHTML = "Password does not match";
    return false;
  }
}


/*Login form validation javascript*/

function Validate() {
  var user = document.getElementById('user').value;
  var pass = document.getElementById('pass').value;

  if (user == "") {
    document.getElementById('username').style.color = "red";
    document.getElementById('username').innerHTML = "*Please Enter Username*";
    return false;
  } else {
    document.getElementById('username').style.color = "green";
    document.getElementById('username').innerHTML = "Valid";


  }
  if ((user.length < 4) || (user.length > 15)) {
    document.getElementById('username').style.color = "red";
    document.getElementById('username').innerHTML = "*Please Enter between 4 to 15 characters*";
    return false;
  } else if ((pass.length < 6) || (pass.length > 15)) {
    document.getElementById('usep').style.color = "red";
    document.getElementById('usep').innerHTML = "*Please Enter between 6 to 15 characters*";
    return false;
  } else {
    document.getElementById('usep').style.color = "green";
    document.getElementById('usep').innerHTML = "Valid";
    return true;
  }
}
/*book store alert function*/

function book()
{
  alert("Check out our bookstore 'slytherinBooks' to order this . There you will get much more exciting offers 😃");
}



/*timer deals end*/

// Set the date we're counting down to
var countDownDate = new Date("Aug 20, 2020 23:59:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo1").style.color = "green";
  document.getElementById("demo1").innerHTML = "Ends in -> " + days + "d : " + hours + "h : "
  + minutes + "m : " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo1").style.color = "red";
    document.getElementById("demo1").innerHTML = "Deals End";
  }
}, 1000);




// Set the date we're counting down to
var countDownDate = new Date("Aug 20, 2020 23:59:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo2").style.color = "green";
  document.getElementById("demo2").innerHTML = "Ends in -> " + days + "d : " + hours + "h : "
  + minutes + "m : " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo2").style.color = "red";
    document.getElementById("demo2").innerHTML = "Deals End";
  }
}, 1000);




// Set the date we're counting down to
var countDownDate = new Date("Aug 20, 2020 23:59:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo3").style.color = "green";
  document.getElementById("demo3").innerHTML = "Ends in -> " + days + "d : " + hours + "h : "
  + minutes + "m : " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo3").style.color = "red";
    document.getElementById("demo3").innerHTML = "Deals End";
  }
}, 1000);


/*get location API*/

function fun()
{
var a = confirm("Do you want to allow location access of this device?");
if(a == true)
getLocation();
}
var x = document.getElementById("demo");

function getLocation()
 {
  if (navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else
  {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position)
{
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
