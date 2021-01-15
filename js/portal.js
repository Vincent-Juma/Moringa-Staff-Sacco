
function Contact(first, last,email,telephone,city,gender) {
  this.firstName = first;
  this.lastName = last;
  this.emailAddress=email;
  this.telephoneNo=telephone;
  this.residentCity=city;
  this.statusGender=gender;
  }

$(document).ready(function () {
  $("form#new-contact").submit(function (event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
   
    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    
    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + newContact.lastName + "</span></li>");


    $("#new-first-name").val("");
    $("#new-last-name").val("");
    
    alert('You Have Sucessfully Registered as A Sacco Member!!!')

  });
  
});










