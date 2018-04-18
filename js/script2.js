$(document).ready(function(){

  // Store user inputs
  var inputs = [""];

  // String to store current input string
  var totalString;

  // Operators array for validation without the " . "
  var operators = ["+","−","÷","×"];

  // Dot array for validation
  var dot = ["."];

  // Numbers array for validation
  var numbers = [0,1,2,3,4,5,6,7,8,9];

  function getValue(input){
    if(dot.includes(inputs[inputs.length-1] === true && input === ".")) {
      console.log("Duplicate dot")
    } else if(inputs.lenght === 1 && operators.includes(input) === false) {
      inputs.push(input);
    } else if(dot.includes(inputs[inputs.length-1]) === false) {
      inputs.push(input);
    } else if(numbers.includes(Number(input))) {
      inputs.push(input);
      console.log("number input")
    }
    update();
  };

  function update(){
    totalString = inputs.join("");
    $("#number").html(totalString);
  };

  function calculateTotal(){
    totalString = inputs.join("");
    $("#number").html(eval(totalString));
  };

  function calculatePercentage(){
    var percentString = totalString / 100;
    inputs = percentString
    console.log("this is percentString " + percentString)
    $("#number").html(percentString)
    console.log("this is inputs " + inputs)
    console.log("this is totalString " + totalString)


  }

  $(".button").on("click", function(){
    if(this.id === "AC"){
      inputs=[""];
      update();
      $("#number").html("0")

    } else if(this.id === "CE"){
      inputs.pop();
      update();

    } else if(this.id === "equals"){
      calculateTotal();

    } else if(this.id === "%") {
      calculatePercentage();

    } else {
      if(inputs[inputs.length-1].indexOf("+","-","/","*",".") === -1){
        console.log("this is inputs " + inputs)
        getValue(this.id);
      } else {
        getValue(this.id);
      }
    }

  });

});
