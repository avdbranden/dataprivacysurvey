$(document).ready(function(){
  var dir_percentage = $("#dir_percentage").text();
  var reg_percentage = $("#reg_percentage").text();
  $('.compliance-bar-dir').animate({width: dir_percentage}, 1000);
  $('.compliance-bar-reg').animate({width: reg_percentage}, 1000);
});
