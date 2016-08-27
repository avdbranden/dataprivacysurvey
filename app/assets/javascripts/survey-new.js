$(document).ready(function(){

  console.log($(".question_input").length);
  $(".question").hide();
  $(".question:first").show();

  $(".question_input").click(function(e){

    if ( this.id == "1acompliant" ) {
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "1bcompliant") {
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "1ccompliant") {
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "1dcompliant") {
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "1ecompliant") {
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "1fcompliant") {
      console.log("clicked");
      if ( $("input[id=1fcompliant]:checked").val() == "true" ) {
        console.log("true");
        $("#1f2compliant").closest(".question").hide();
        $("#1f1answer_text").closest(".question").slideDown();
      } else {
        console.log("false");
        $("#1f1answer_text").closest(".question").hide();
        $("#1f2compliant").closest(".question").slideDown();
      }
    } else if ( this.id == "1f1answer_text") {
      console.log("id answer text");
      $(event.target).closest("input").keyup(function(){
        $("#1gcompliant").closest(".question").slideDown();
      })
    } else if ( this.id == "1f2compliant") {
      console.log("g clicked");
      $("#1gcompliant").closest(".question").slideDown();
    } else if ( this.id == "1gcompliant") {
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "1hcompliant") {
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "1icompliant") {
      console.log("clicked on i")
      console.log($("#survey_number_of_employees").val())
      if ( $("input[name*=data_processor]").is(":checked") ) {
        console.log("data processor checked");
        $(event.target).closest(".question").next(".question").slideDown();
      } else if ( $("#survey_number_of_employees").val() == "Above 200" ) {
        $(event.target).closest(".question").next(".question").slideDown();
      }
    }

  })

})
