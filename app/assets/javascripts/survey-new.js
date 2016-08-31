// List of all functions

// Show panel
function showPanel(panel_number) {
  // Concat panel-number to create selector id
  var panel_id = "#panel-".concat(panel_number);
  // Immediately show first panel
  $(panel_id).show();
  // At the same time hide all questions inside the first panel
  $(panel_id + " .question").hide();
  // At the same time, show the first question from the first panel
  // TODO only show first question when preliminary questions filled out
  $(panel_id + " .question:first").show();
}

$(document).ready(function(){

// Console.logs remain in place for debugging purposes
  console.log($(".question_input").length);

  // Immediately hide all the panel questions
  $(".panel-questions").hide();

  // Immediately show first question of first panel
  // showPanel(1);
  showPanel(1);

  // Add event listener on the radio_button pair od the preliminary question
  // as to whether organization is a data processor at large scale
  $(".survey_data_processor").click(function(e){
    // Check if data_processor preliminary question checked as 'Yes'
    if ( $("#survey_data_processor_true").is(":checked") ) {
      console.log("data_processor radio_button activated as Yes");
      // Show question 1j
      $("#1jcompliant").closest(".question").show();
    } else {
      console.log("data_processor radio_button activated as No");
      // Hide question 1j
      $("#1jcompliant").closest(".question").hide();
      // Setting 1j radio_buttons such as none of them are checked
      // So to nullify any previously 'yes' or 'no' checked value in 1j
      $("input[name*=12]").prop("checked", false);
    }

  })




  // Add event listener on the radio_button pair of each question
  $(".question_input").click(function(e){

      // PANEL-1

    // Check if radio_button clicked on has the id of the question
    if ( this.id == "1acompliant" ) {
      // Slide down the folliwng question
      console.log("clicked on 1acompliant");
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "1bcompliant") {
      console.log("clicked on 1bcompliant");
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "1ccompliant") {
      console.log("clicked on 1ccompliant");
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "1dcompliant") {
      console.log("clicked on 1dcompliant");
      $(event.target).closest(".question").next(".question").slideDown();
      console.log("clicked on 1ecompliant");
    } else if ( this.id == "1ecompliant") {
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "1fcompliant") {
      console.log("clicked on 1fcompliant");
      // Check if 'Yes' radio_button activated
      if ( $("input[id=1fcompliant]:checked").val() == "true" ) {
        console.log("1fcompliant radio_button activated as Yes");
        // Slide up unrelated indented question
        $("#1f2compliant").closest(".question").slideUp();
        // Slide down related indented question
        $("#1f1answer_text").closest(".question").slideDown();
        // Setting 1f2 radio_buttons such as none of them are checked
        // So to nullify any previously 'yes' or 'no' checked value in 1f2
        $("input[name*=8]").prop("checked", false);
      } else {
      // Check if 'Yes' radio_button not activated (i.e. 'No' is activated)
        console.log("1fcompliant radio_button activated as No");
        // Slide up unrelated indented question
        $("#1f1answer_text").closest(".question").slideUp();
        // Slide down related indented question
        $("#1f2compliant").closest(".question").slideDown();
      }
    } else if ( this.id == "1f1answer_text") {
      // Add event listener on keyup in the text area
      $(event.target).closest("input").keyup(function(){
        // Slide down question 1g
        console.log("1f1answer_text filled in");
        $("#1gcompliant").closest(".question").slideDown();
      })
    } else if ( this.id == "1f2compliant" ) {
      console.log("clicked on 1f2compliant");
      // Slide down question 1g
      $("#1gcompliant").closest(".question").slideDown();
    } else if ( this.id == "1gcompliant" ) {
      console.log("clicked on 1gcompliant");
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "1hcompliant" ) {
      console.log("clicked on 1hcompliant");
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "1icompliant" ) {
      console.log("clicked on 1icompliant");
      // Check if data_processor preliminary question marked as Yes
      if ( $("#survey_data_processor_true").is(":checked") ) {
        console.log("data_processor radio_button activated as Yes");
        // Slide down related indented question
        $(event.target).closest(".question").next(".question").slideDown();
      } else {
        // Slide down question 2
        console.log("data_processor radio_button activated as No");
        $("#2compliant").closest(".question").slideDown();
      }
    } else if ( this.id == "1jcompliant" ) {
      console.log("clicked on 1jcompliant");
      $("#2compliant").closest(".question").slideDown();
    } else if ( this.id == "2compliant" ) {
      // Check if 'Yes' radio_button activated
      if ( $("input[id=2compliant]:checked").val() == "true" ) {
        console.log("2compliant radio_button activated as Yes");
        // Slide down unrelated indented question 2a
        $("#2acompliant").closest(".question").slideDown();
      // Else means that radio_button 'No' activated
      } else {
        console.log("2compliant radio_button activated as No");
        // Slide down question 3
        $("#3compliant").closest(".question").slideDown();
        // Slide up unrelated indented question 2a
        $("#2acompliant").closest(".question").slideUp();
        // Setting 2a radio_buttons such as none of them are checked
        // So to nullify any previously 'yes' or 'no' checked value in 2a
        $("input[name*=14]").prop("checked", false);
      }
    } else if ( this.id == "3compliant" ) {
      console.log("clicked on 3compliant");
      $("#4compliant").closest(".question").slideDown();
    } else if ( this.id == "4compliant" ) {
      console.log("clicked on 4compliant");
      $("#5compliant").closest(".question").slideDown();
    } else if ( this.id == "5compliant" ) {
      console.log("clicked on 5compliant");
      // Immediately show first question of first panel
      showPanel(2);
    }

      // PANEL-2

    if ( this.id == "6acompliant" ) {
      console.log("clicked on 6acompliant");
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "6bcompliant" ) {
      console.log("clicked on 6bcompliant");
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "6ccompliant" ) {
      console.log("clicked on 6ccompliant");
      $(event.target).closest(".question").next(".question").slideDown();
      // Add event listener on keyup in the text area
      $("input[id=6danswer_text]").keyup(function(){
        // If characterinput, show first question of third panel
        console.log("text typed in 6danswer_text");
        showPanel(3);
      })
    }

      // PANEL-3

    if ( this.id == "7compliant" ) {
      console.log("clicked on 6acompliant");
      $(event.target).closest(".question").next(".question").slideDown();
    }

//
  })
//
})
