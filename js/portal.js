
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
    
    $("ul#contacts").append("<li><span class='contact'>" + newContact.lastName + "</span></li>");
    // newContact.firstName + 

    // $("#new-first-name").val("");
    $("#new-last-name").val("");
    
    alert('You Have Sucessfully Registered as A Sacco Member!!!')

  });
  
  $(".container").submit(function(event) {
    event.preventDefault();
    var name = $("#naame").val();
    alert("Our Dear  Member," + name+"  Welcome  and  feel  at  home  to  be  part  of  the  successful  team. Together  we  shall  conquer.!!!");
    document.getElementById("my-form").reset();
});

});










