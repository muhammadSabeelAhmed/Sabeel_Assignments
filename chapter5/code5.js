//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var num1,
  num2,
  newnum = 0;
function inputUser() {
  num1 = parseInt(prompt("Pelase Enter First Number.", "5"));
  num2 = parseInt(prompt("Pelase Enter Second Number.", "5"));
}
function result(operate) {
  if (num1 >= 0 && num2 >= 0) {
    document.write(
      "<p style='font-size:30px; color:green'>" +
        operate +
        " of " +
        num1 +
        " & " +
        num2 +
        " is <strong>" +
        newnum +
        "</strong></p>"
    );
  } else {
    document.write("NaN! Please enter numbers only");
  }
}
function add() {
  inputUser();
  if (num1 != null && num2 != null) {
    newnum = num1 + num2;
    result("Sum");
  } else {
    document.write("Please enter numbers");
  }
}
function subtract() {
  inputUser();
  if (num1 != null && num2 != null) {
    newnum = num1 - num2;
    result("Subtract");
  } else {
    document.write("Please enter numbers");
  }
}
function multiply() {
  inputUser();
  if (num1 != null && num2 != null) {
    newnum = num1 - num2;
    result("Mulpiplication");
  } else {
    document.write("Please enter numbers");
  }
}
function divide() {
  inputUser();
  if (num1 != null && num2 != null) {
    newnum = num1 - num2;
    result("Division");
  } else {
    document.write("Please enter numbers");
  }
}
function question3() {
  var num;
  document.write("Value after Variable declaration is " + num);
  num = 5;
  document.write("<br>Initial is: " + num);
  num++;
  document.write("<br>Value after increment is: " + num);
  num = num + 7;
  document.write("<br>Value after addition is: " + num);
  num--;
  document.write("<br>Value after decrement is: " + num);
  num = num % 3;
  document.write("<br>The remainder is: " + num);
}

function question4() {
  var price = prompt("Enter movie ticket Price", "600");
  var ticketNo = prompt("How many tickets you want to purchase?", "5");

  if (price != null && ticketNo != null) {
    var res = price * ticketNo;
    if (ticketNo >= 0 && price >= 0) {
      document.write(
        "<p style='font-size:30px; color:green'>Total cost to buy " +
          ticketNo +
          " tickets to a movie is " +
          " is <strong>" +
          res +
          "</strong>PKR</p>"
      );
    } else {
      document.write("NaN! Please enter numbers only");
    }
  } else {
    document.write("Please enter numbers");
  }
}

function question5() {
  var table = prompt("Enter number to print TABLE", "2");
  if (table >= 0) {
    document.write("<h3>Table of " + table + "</h3>");
    for (var i = 0; i <= 15; i++) {
      document.write(table + " * " + i + " = " + table * i + "<br>");
    }
  } else {
    document.write("Please enter numbers");
  }
}

function question6() {
  var table = prompt("Please enter temperature in format\n * 10C\n * 10F", "2");
  if (parseInt(table) >= 0) {
    var result;
    if (table[table.length - 1] == "F") {
      result = (parseInt(table) - 32) * (5 / 9);
      document.write(
        parseInt(table) + "<sup>0</sup>F is " + result + "<sup>0</sup>C"
      );
    } else if (table[table.length - 1] == "C") {
      result = parseInt(table) * (9 / 5) + 32;
      document.write(
        parseInt(table) + "<sup>0</sup>C is " + result + "<sup>0</sup>F"
      );
    } else {
      document.write("Please enter right format Like 10C or 10F");
    }
  } else {
    document.write("Please enter numbers");
  }
}

function question7() {
  var price1 = prompt("Enter Price of item 1", "650");
  var items1 = prompt("Enter quantity of item 1", "3");
  var price2 = prompt("Enter Price of item 2", "100");
  var items2 = prompt("Enter quantity of item 2", "7");

  if (price1 != null && items1 != null && price2 != null && items2 != null) {
    var res =
      parseInt(price1) * parseInt(items1) +
      parseInt(price2) * parseInt(items2) +
      100;
    if (
      parseInt(price1) >= 0 &&
      parseInt(items1) >= 0 &&
      parseInt(price2) >= 0 &&
      parseInt(items2) >= 0
    ) {
      document.write("<h2>Shopping Cart</h2>");
      document.write("Price of item 1 is " + price1 + "<br>");
      document.write("Quantity of item 1 is " + items1 + "<br>");
      document.write("Price of item 2 is " + price2 + "<br>");
      document.write("Quantity of item 2 is " + items2 + "<br>");
      document.write("Shipping Charges " + 100 + "<br><br>");
      document.write("Total Cost of your order is " + res);
    } else {
      document.write("NaN! Please enter numbers only");
    }
  } else {
    document.write("Please enter numbers");
  }
}

function question8() {
  var tMarks = prompt("Enter Total Marks", "850");
  var oMarks = prompt("Enter Marks Obtained", "596");

  if (tMarks != null && oMarks != null) {
    var res = parseInt(oMarks * 100) / parseInt(tMarks);
    if (parseInt(res) >= 0) {
      document.write("<h2>Mark Sheet</h2>");
      document.write("Total Marks: " + tMarks + "<br>");
      document.write("Marks Obtained: " + oMarks + "<br>");
      document.write("Percentage: " + res + "%");
    } else {
      document.write("NaN! Please enter numbers only");
    }
  } else {
    document.write("Please enter numbers");
  }
}

function question9() {
  var curr1 = prompt("Enter amount in US Dollars you have", "10");
  var curr2 = prompt("Enter amount in Saudi Riyals you have", "25");

  if (curr1 != null && curr2 != null) {
    var pkr = parseInt(curr1) * 104.8 + parseInt(curr2) * 28;
    if (parseInt(pkr) >= 0) {
      document.write("<h2>Currency in PKR</h2>");
      document.write("Total Currency in PKR: " + pkr + "<br>");
    } else {
      document.write("NaN! Please enter numbers only");
    }
  } else {
    document.write("Please enter numbers");
  }
}

function question10() {
  var mynum = prompt("Enter any number in your mind", "7");

  if (mynum != null) {
    mynum = ((parseInt(mynum) + 5) * 10) / 2;
    if (parseInt(mynum) >= 0) {
      document.write("<h2>Result</h2>");
      document.write(
        "Added by 5<br>Multiply by 10<br>Divide by 2<br>Final Result is: " +
          mynum
      );
    } else {
      document.write("NaN! Please enter numbers only");
    }
  } else {
    document.write("Please enter numbers");
  }
}

function question11() {
  var year1 = prompt("Enter Current Year", "2020");
  var year2 = prompt("Enter Birth Year", "1994");

  if (year1 != null && year2 != null) {
    var res = parseInt(year1) - parseInt(year2);
    if (parseInt(res) >= 0) {
      document.write("<h2>Age Calculator</h2>");
      document.write("Current Year: " + year1 + "<br>");
      document.write("Birth Year: " + year2 + "<br>");
      document.write("Your Age is: " + res + "<br>");
    } else {
      document.write("NaN! Please enter numbers only");
    }
  } else {
    document.write("Please enter numbers");
  }
}

function question12() {
  var radius = prompt("Enter Radius of circle", "20");

  if (radius != null) {
    var circum = 2 * 3.142 * parseInt(radius);
    var area = 3.142 * (parseInt(radius) ^ 2);

    if (parseInt(radius) >= 0) {
      document.write("<h2>The Geometrizer</h2>");
      document.write("Radius of a Circle is: " + radius + "<br>");
      document.write("The Circumference is: " + circum + "<br>");
      document.write("The Area is: " + area + "<br>");
    } else {
      document.write("NaN! Please enter numbers only");
    }
  } else {
    document.write("Please enter numbers");
  }
}
function question13() {
  var snack = prompt("Enter your favourite Snack", "Chocolate Chip");
  var currentAge = prompt("Enter your current age", "26");
  var maxAge = prompt("Enter estimated maximum age", "65");
  var amount = prompt("Estimated amount of scnack per day", "3");

  if (radius != null) {
    var circum = 2 * 3.142 * parseInt(radius);
    var area = 3.142 * (parseInt(radius) ^ 2);
    if (parseInt(radius) >= 0) {
      document.write("<h2>The Lifetime Supply Calculator</h2>");
      document.write("Radius of a Circle is: " + radius + "<br>");
      document.write("The Circumference is: " + circum + "<br>");
      document.write("The Area is: " + area + "<br>");
    } else {
      document.write("NaN! Please enter numbers only");
    }
  } else {
    document.write("Please enter numbers");
  }
}
