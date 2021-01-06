//1. Declare a variable called age & assign to it your age. Show your age in an alert box
function question1() {
  var age = 26;
  alert("I am " + age + " years old");
}

//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var visits = 0;
function question2() {
  alert("You have visited this site " + visits + " time");
  visits++;
}

//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser
function question3() {
  var birthYear = "1994";
  document.write(
    "My birth year is " +
      birthYear +
      "<br>Data type of declared variable is number"
  );
}
//4.A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
function question4() {
  var name = prompt("Please enter Name", "John Doe");
  var product = prompt(
    "Which product you want to purchase?\n\n * T-Shirt\n * Pants\n * Trouser\n * Shoes",
    "T-Shirt"
  );
  var quantity = prompt("Enter number of items you want to purchase?", "2");
  if (name !== null && product !== null && quantity !== null) {
    document.write(
      "<strong>" +
        name +
        "</strong> ordered <strong>" +
        quantity +
        " " +
        product +
        "</strong> on XYZ Clothing Store"
    );
  } else {
    alert("All Fields required");
  }
}
