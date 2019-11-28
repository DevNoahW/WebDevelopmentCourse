/*
Name: Noah Wieser
Date Created: 11/27/2019
Most recent revision: 11/27/2019

*/
var name = "";
var email = "";
var phone = "";
var reason = "";
var info = "";
var visitedBefore = "";
var days;


function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["contact"].elements.length;
        loopCounter++) {
        if (document.forms["contact"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["contact"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

//Here we will validate the data the user has entered
function validateItems() {
    clearErrors();

    name = document.forms["contact"]["name"].value;
    email = document.forms["contact"]["email"].value;
    phone = document.forms["contact"]["phone"].value;
    reason = document.forms["contact"]["reason"].value;
    info = document.forms["contact"]["info"].value;
    //If starting bet field is filled with a blank or a non-number, alert user
    if (name == "") {
        alert("Name is a requied field.");
        document.forms["contact"]["name"]
           .parentElement.className = "form-group has-error";
        document.forms["contact"]["name"].focus();
        return false;
    }
    if (email == "") {
        alert("Email address is a requied field");
        document.forms["contact"]["email"]
           .parentElement.className = "form-group has-error";
        document.forms["contact"]["email"].focus();
        return false;
    }
    if (phone == "") {
        alert("Phone number is a requred field.");
        document.forms["contact"]["phone"]
           .parentElement.className = "form-group has-error";
        document.forms["contact"]["phone"].focus();
        return false;
    }

    alert("We have received your request!");

   // We are returning false so that the form doesn't submit
   // and so that we can see the results
   return false;
}
