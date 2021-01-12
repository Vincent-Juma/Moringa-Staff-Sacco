function results(){
    var fname=document.getElementById('inputfname4').value;
    var lname=document.getElementById('inputlname4').value;
    var address=document.getElementById('input-address').value;
    var addresstwo=document.getElementById('input-addresstwo').value;
    var city=document.getElementById('location').value;
    var status=document.getElementById('input-status').value;
    var comment=document.getElementById('input-comment').value;
    
    document.write(fname+"br/>");
    document.write(lname+"br/>");
    document.write(address+"br/>");
    document.write(addresstwo+"br/>");
    document.write(city+"br/>");
    document.write(status+"br/>");
    document.write(comment+"br/>");


    document.getElementById("submit") .innerHTML="Your Are Added as Member : " + fname+lname;

};


$(".container").submit(function(event) {
    event.preventDefault();
    var name = $("#naame").val();
    alert("Our Dear Client," + name+ ".We have received your  Order, It will delivered to your doorstep shortly;Thank you for Choosing us!!!");
    document.getElementById("my-form").reset();
});
