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
  showPanel(4);

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
      // Show first question of second panel
      showPanel(2);
    }

      // PANEL-2

    if ( this.id == "4acompliant" ) {
      console.log("clicked on 4acompliant");
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "4bcompliant" ) {
      console.log("clicked on 4bcompliant");
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "4ccompliant" ) {
      console.log("clicked on 4ccompliant");
      $(event.target).closest(".question").next(".question").slideDown();
      // Check if consent asked checked to 'Yes'
      if ( $("input[id=4ecompliant]:checked").val() == "true" ) {
        // Slide up unrelated question
        $("#4gcompliant").closest(".question").slideUp();
        // Setting 4g radio_buttons such as none of them are checked
        // So to nullify any previously 'yes' or 'no' checked value in 4g
        $("input[name*=23]").prop("checked", false);
      }
    } else if ( this.id == "4dcompliant" ) {
      console.log("clicked on 4dcompliant");
      $(event.target).closest(".question").next(".question").slideDown();
      // Check if consent asked checked to 'Yes'
      if ( $("input[id=4ecompliant]:checked").val() == "true" ) {
        // Slide up unrelated question
        $("#4gcompliant").closest(".question").slideUp();
        // Setting 4g radio_buttons such as none of them are checked
        // So to nullify any previously 'yes' or 'no' checked value in 4g
        $("input[name*=23]").prop("checked", false);
      }
    } else if ( this.id == "4ecompliant" ) {
      console.log("clicked on 4ecompliant");
      $(event.target).closest(".question").next(".question").slideDown();
      // Check if consent asked checked to 'no'
      if ( $("input[id=4ecompliant]:checked").val() == "false" ) {
        // Slide up unrelated question
        $("#4gcompliant").closest(".question").slideUp();
        // Setting 4g radio_buttons such as none of them are checked
        // So to nullify any previously 'yes' or 'no' checked value in 4g
        $("input[name*=23]").prop("checked", false);
      }
    } else if ( this.id == "4fanswer_text") {
      // Add event listener on keyup in the text area
      $(event.target).closest("input").keyup(function(){
        console.log("4fanswer_text filled in");
        // Check if 4c checked to 'No', 4d checked to 'No' & 4e checked to 'Yes'
        if ( $("input[id=4ccompliant]:checked").val() == "false"
          && $("input[id=4dcompliant]:checked").val() == "false"
          && $("input[id=4ecompliant]:checked").val() == "true" ) {
          console.log("4c ==> true, 4d ==> true & 4e ==> false");
          // Slide down question 4g
          $("#4gcompliant").closest(".question").slideDown();
        } else {
          // Show first question of third panel
          showPanel(3);
        }
      })
    } else if ( this.id == "4gcompliant") {
      // Show first question of third panel
      showPanel(3);
    }

      // PANEL-3

    if ( this.id == "5compliant" ) {
      console.log("clicked on 5compliant");
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "6compliant" ) {
      console.log("clicked on 6compliant");
      // Check if question 4e checked as 'yes'
      if ( $("input[id=4ecompliant]:checked").val() == "true" ) {
        console.log("question 4e checked as Yes");
        $(event.target).closest(".question").next(".question").slideDown();
      // Alse, question 4e checked as 'no'
      } else {
        console.log("question 4e checked as No");
        // Slide down question 8
        $("#8compliant").closest(".question").slideDown();
      }
    } else if ( this.id == "7compliant" ) {
      console.log("clicked on 7compliant");
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "7acompliant" ) {
      console.log("clicked on 7acompliant");
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "7bcompliant" ) {
      console.log("clicked on 7bcompliant");
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "8compliant" ) {
      console.log("clicked on 8compliant");
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "9compliant" ) {
      console.log("clicked on 9compliant");
      if ( $("input[id=9compliant]:checked").val() == "true" ) {
        // If question 9 checked as 'Yes'
        console.log("question 9 checked as Yes");
        $(event.target).closest(".question").next(".question").slideDown();
      // Else question 9 checked as 'No'
      } else {
        console.log("question 9 checked as No");
        // Show first question of fourth panel
        showPanel(4);
        // Slide up question 9a
        $("#9acompliant").closest(".question").slideUp();
        // Setting 9a radio_buttons such as none of them are checked
        // So to nullify any previously 'yes' or 'no' checked value in 9a
        $("input[name*=31]").prop("checked", false);
      }
    } else if ( this.id == "9acompliant") {
      // Show first question of fourth panel
      showPanel(4);
    }

      // PANEL-4

    if ( this.id == "10compliant" ) {
      console.log("clicked on 10compliant");
      if ( $("input[id=10compliant]:checked").val() == "true" ) {
        // If question 10 checked as 'Yes'
        console.log("question 10 checked as Yes");
        // Show question 10a
        $(event.target).closest(".question").next(".question").slideDown();
      // Else question 9 checked as 'No'
      } else {
        console.log("question 10 checked as No");
        // Slide down question 11
        $("#11compliant").closest(".question").slideDown();
        // Slide up question 9a
        $("#10acompliant").closest(".question").slideUp();
        // Setting 9a radio_buttons such as none of them are checked
        // So to nullify any previously 'yes' or 'no' checked value in 9a
        $("input[name*=31]").prop("checked", false);
      }
    } else if ( this.id == "10acompliant" ) {
      console.log("clicked on 10acompliant");
      $(event.target).closest(".question").next(".question").slideDown();
    } else if ( this.id == "11compliant" ) {
      console.log("clicked on 10acompliant");
      if ( $("input[id=11compliant]:checked").val() == "true" ) {
        // If question 11 checked as 'Yes'
        console.log("question 11 checked as Yes");
        // Slide down questions 11a, 11b and 11c
        $("#11aanswer_text").closest(".question").slideDown();
        $("#11bcompliant").closest(".question").slideDown();
        $("#11ccompliant").closest(".question").slideDown();
      // Else question 11 checked as 'No'
      } else {
        console.log("question 11 checked as No");
        // Slide down question 12
        $("#12compliant").closest(".question").slideDown();
        // Slide up questions 11a, 11b and 11c
        $("#11aanswer_text").closest(".question").slideUp();
        $("#11bcompliant").closest(".question").slideUp();
        $("#11ccompliant").closest(".question").slideUp();
        // Setting 11a, 11b and 11c radio_buttons such as none of them are checked
        // So to nullify any previously 'yes' or 'no' checked value in 11a, 11b and 11c
        // TODO
        // Show first question of fifth panel
        showPanel(5);
      }
    } else if ( this.id == "11ccompliant" ) {
      console.log("clicked on 11ccompliant");
      // If question 11c checked as 'Yes'
      if ( $("input[id=11ccompliant]:checked").val() == "true" ) {
        console.log("question 11c checked as Yes");
        // Show question 11c1
        $(event.target).closest(".question").next(".question").slideDown();
      // Else question 11c checked as 'No'
      } else {
        console.log("question 11c checked as No");
        // Show first question of fifth panel
        showPanel(5);
        // Slide up question 11c1
        $("#11c1answer_text").closest(".question").slideUp();
      }
    } else if ( this.id == "11c1answer_text") {
      // Add event listener on keyup in the text area
      $(event.target).closest("input").keyup(function(){
        console.log("11c1answer_text filled in");
        // Show first question of fifth panel
        showPanel(5);
      })
    }

     // PANEL-5

    if ( this.id == "12compliant" ) {
      console.log("clicked on 12compliant");
      $(event.target).closest(".question").next(".question").slideDown();
    }

//
  })
//
})
