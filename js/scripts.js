// SERVICES SCRIPT
// alert("welcome vj");

var mission_img = '<img src="./img/about.jpeg" height="250px" width="350px"><br><h5>MISSION</h5>';
var mission_text2 = '<h5>MISSION</h5><p>We create wealth for members by mobilization of savings and provision of competitive loans, while assuring high returns through innovative financial solutions</p>';
$(document).ready(function()
{
  $("#mission").click(function()
  {
      $(this).html($(this).html() == mission_text2 ? mission_img : mission_text2);
  });
});

var vision_img = '<img src="./img/sacco.jpg" height="250px" width="350px"><br><h5>VISION</h5>';
var vision_text2 = '<h5>MISSION</h5><p>To be the preferred financial services provider to our members</p>';
$(document).ready(function()
{
  $("#vision").click(function()
  {
      $(this).html($(this).html() == vision_text2 ? vision_img : vision_text2);
  });
});
var motto_img = '<img src="./img/sacco3.jpg" height="250px" width="350px"><br><h5>MOTTO</h5>';
var motto_text2 = '<h5>MISSION</h5><p>Financial management is the the key to success.</p>';
$(document).ready(function()
{
  $("#motto").click(function()
  {
      $(this).html($(this).html() == motto_text2 ? motto_img : motto_text2);
  });
});
// END OF SERVICES SCRIPT