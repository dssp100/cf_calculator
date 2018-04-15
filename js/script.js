
// Wait for document to finish loading
$(document).ready(function() {
  console.log( "document loaded" );

  // Variables
  var firstNumber = [];
  var secondNumber = [];
  var operator;
  var lock = false;

  // Setting the display to zero
  $("#number").html("0");

  // Getting the value of the numbers
  $(".number").on("click", function(){
    // $('.input-button')($(this).css('box-shadow',"none"));



    if(lock === false){
      firstNumber.push($(this).attr("value"))
      $("#number").html(firstNumber.join(""));
      console.log(firstNumber);

    } else {
      secondNumber.push($(this).attr("value"))
      $("#number").html(secondNumber.join(""));
      console.log(secondNumber);
    }
  });



  // Getting the value of the operators
  $(".operator").on("click", function(){
    lock = true;
    operator = ($(this).children().html());
    $("#number").html(operator);
    console.log(operator);
  });

  // Calculating the reuslt
  $(".equals").on("click", function(){
    var num1 = parseFloat(firstNumber.join("")); //Convert String to floating Nr and storing the val. in num1.
    console.log(num1);
    var num2 = parseFloat(secondNumber.join("")); //Convert String to floating Nr and storing the val. in num2.
    console.log(num2);
    var result;

    // Comparing the operator selected and performing calculation.
    if(operator === "+"){
      result = num1 + num2;

    } else if(operator === "−"){
        result = num1 - num2;

    } else if(operator === "÷"){
        result = num1 / num2;

    } else if(operator === "×"){
        result = num1 * num2;

    }

    if($(this).text().match('.')) {
      $("#number").html(result);
      console.log("result is " + result);
    } else {
      $("#number").html(result.toFixed(1));
      console.log("result is " + result.toFixed(1));
    }


  });

  // Resetting the sceen and values
  $(".clear").on("click", function(){
    console.log($(this).attr("value"));
    $("#number").html("0"); // Setting
    lock = false;
    firstNumber = [];
    secondNumber = [];
    operator;
  });





















}); // end of document.ready
