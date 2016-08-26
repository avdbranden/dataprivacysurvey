$(document).ready(function(){

  console.log($(".question_input").length);
  $(".question").hide();
  $(".question:first").show();

  $(".question_input").click(function(e){

      console.log("clicked");
      $(event.target).closest(".question").next(".question").slideDown();
  })

})
