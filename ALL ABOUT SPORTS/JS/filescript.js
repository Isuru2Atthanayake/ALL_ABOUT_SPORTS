
//function dissapears the form and displays a preview with two buttons
function Disappear() {


    form1 = document.getElementById("query_formelements");
    form1.style.display = "none";
    query_EndResult.style.display = "block"
    query_ERbtns.style.display = "block";

    var displayform1 = document.getElementById("Unameprint");
    var displayform2 = document.getElementById("Uemailprint");
    var displayform3 = document.getElementById("Udetailsprint");
    var displayform4 = document.getElementById("Udetailscatprint");




    var nameofuser = document.getElementById("Uname")
    var emailofuser = document.getElementById("Uemail")
    var detailsofuser = document.getElementById("Ufield")
    var preferenceofuser;

    if (document.getElementById('Catagory1').checked) {
        preferenceofuser = document.getElementById('Catagory1');
    } else if (document.getElementById('Catagory2').checked) {
        preferenceofuser = document.getElementById('Catagory2');
    } else if (document.getElementById('Catagory3').checked) {
        preferenceofuser = document.getElementById('Catagory3');
    }



    displayform1.innerHTML = "Name: " + nameofuser.value;
    displayform2.innerHTML = "Email: " + emailofuser.value;
    displayform3.innerHTML = "Details: " + detailsofuser.value;
    displayform4.innerHTML = "Catagory: " + preferenceofuser.value;

}

//validates email
function ValidateEmail(inputemail) {
    var emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!(inputemail.value.match(emailformat))) {

        alert("You have entered an invalid Email address!");
        return false;
    } else {
        return true;
    }
}


//validates  user input in the form
function validateForm() {

    var c = true;
    var x = document.forms["Queryform"]["Uname"].value;
    var y = document.forms["Queryform"]["Uemail"];
    var text1 = document.getElementById("Ufield").value;



//the user is prompted continiously to enter input to the missing sections
// variable c is assigned false whenever there is missing or inalid input
    if (x == "") {
        alert("Name must be filled out");
        c = false;
    }


    if (c == true) {
        c = ValidateEmail(y);
    }



    if (c == true) {
        if (((!document.getElementById('Catagory1').checked)) && ((!document.getElementById('Catagory2').checked)) && ((!document.getElementById('Catagory3').checked))) {
            alert("Please Select the valid catagory of queries");
            c = false;

        } else {
            c = true;

        }
    }


    if (c == true) {
        if (text1 == "") {
            alert("Please fill the query ");
            c = false;

        }

    }
	//the form dissapears and the preview is given only  if there are no validation issues
    if (c == true) {
        Disappear();
    }
}

var form1 = document.getElementById("mainform");
//quits preview and goes back to form
function backtoform() {
    query_EndResult.style.display = "none";
    form1.style.display = "block";
}
// sends confirmation message when query is submitted and makes the resubmit button visible
function disappearmail() {
    query_EndResult.style.display = "none";
    backtoqf.style.display = "block";

    var displayform5 = document.getElementById("query_confirmationmessage");
    displayform5.innerHTML = "Your query has been sent,we will get back to you as soon as possible!";

}

