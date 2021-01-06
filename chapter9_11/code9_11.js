// 1. Write a program to take “city” name as input from user. Ifuser enters “Karachi”, welcome the user like this:“Welcome to city of lights”
function question1() {
  var cityName = prompt("Please enter city name", "Karachi");
  if (cityName == "Karachi" || cityName == "karachi" || cityName == "KARACHI") {
    alert("Welcome to city of lights");
  } else {
    alert("Welcome to " + cityName);
  }
}

function question2() {
  var gender = prompt("Please enter your Gender", "Male");
  if (gender == "Male" || gender == "male" || gender == "MALE") {
    alert("Good Morning Sir");
  } else if (gender == "Female" || gender == "female" || gender == "FEMALE") {
    alert("Good Morning Mam");
  } else {
    alert("Please enter your right Gender");
  }
}

function question3() {
  var stopColor = prompt("Please enter road signal color to STOP", "Red");
  var readyColor = prompt("Please enter road signal color to READY", "Yellow");
  var moveColor = prompt("Please enter road signal color to MOVE", "Green");
  document.write(
    "<Table width='30%' id='mytable' cellpadding = '10' cellspacing = '0' style='margin: 0 auto; color: rgba(30, 110, 238, 0.753);'><tr style='background-color: white;'> <th>Signal Color</th> <th>Message</th></tr><tr style='background-color:  rgba(195, 214, 243, 0.589);'> <td id='stop'><b>" +
      stopColor +
      "<b></td> <td>Must Stop</td></tr><tr style='background-color: white;'> <td id='ready'><b>" +
      readyColor +
      "<b></td><td>Ready to Move</td></tr> <tr style='background-color:  rgba(195, 214, 243, 0.589);'>  <td id='move'><b>" +
      moveColor +
      "<b></td><td>Move Now</td></tr></Table>"
  );
}

function question4() {
  var fuel = prompt("Please enter remaiing Fuel in your Car", "10");
  fuel = parseFloat(fuel);
  if (fuel <= 0.25) {
    alert("Please refill the fuel in your car");
  } else {
    alert("Enough Fuel to travel");
  }
}

function question5() {
  //A
  // var a = 4;
  // if (++a === 5){
  // alert("given condition for variable a is true");}
  //SHOW
  alert(
    "Q:5-a\n<br>var a = 4;\nif (++a === 5){\nalert('given condition for variable a is true');}\n\nResult: ALERT SHOW SUCCESSFUL"
  );
  alert(
    "Q:5-b\nvar b = 82;\nif (b++ === 83){\nalert('given condition for variable b is true');\n\nResult: NOT SHOW"
  );
  alert(
    "Q:5-c\n var c = 12;\nif (c++ === 13){\nalert('condition 1 is true');}if (c === 13){ alert('condition 2 is true'); } if (++c < 14){ alert('condition 3 is true');  } if(c === 14){  alert('condition 4 is true');}\n\nResult: Condition 2 & 4 is TRUE"
  );
  alert(
    "Q:5-d\nvar materialCost = 20000;\nvar laborCost = 2000;\nvar totalCost = materialCost + laborCost;\n if (totalCost === laborCost + materialCost){\nalert('The cost equals');}\n\nResult: ALERT SHOW SUCCESSFUL"
  );
  alert(
    "Q:5-e\nif (true){\n alert('True'); \n}\n if (false){ \nalert('False');\n}\n\nResult: TURE is the result"
  );
  alert(
    "Q:5-f\nif('car' < 'cat')\n{ alert('car is smaller than cat');\n }\n\nResult: ALERT SHOW SUCCESSFUL"
  );
}

function question6() {
  var omarks = prompt("Please enter marks Obtained in 3 subjects", "250");
  var tmarks = prompt("Please enter total Marks of 3 subjects", "300");
  var grade;
  var remarks;
  if (parseInt(omarks) <= tmarks) {
    var percent = (parseInt(omarks) * 100) / parseInt(tmarks);
    if (percent >= 80) {
      grade = "A-ONE";
      remarks = "Excellent";
    } else if (percent >= 70 && percent < 80) {
      grade = "A";
      remarks = "Good";
    } else if (percent >= 60 && percent < 70) {
      grade = "B";
      remarks = "You need to improver";
    } else {
      grade = "Fail";
      remarks = "Sorry! Hard Luck Next Time";
    }
    document.write("<h2>Mark Sheet</h2><br><br>");
    document.write("Total Marks : " + tmarks + "<br>");
    document.write("Marks Obtained : " + omarks + "<br>");
    document.write("Percentage : " + percent + "% <br>");
    document.write("Grade : " + grade + "<br>");
    document.write("Remarks : " + remarks);
  } else {
    var again = prompt(
      "Marks Obrained should be less then or equal to Total Marks\nDo you want to calculate again?",
      "Yes"
    );
    if (again == "Yes" || again == "yes" || again == "YES") {
      question6();
    }
  }
}

function question7() {
  var randomNum = Math.floor(Math.random() * 11);
  var guess = prompt("Hii.. Guess the secret number from 0 - 10");
  if (guess <= 10) {
    if (randomNum == guess) {
      alert("Bingo! Correct Answer");
    } else if (guess + 1 == randomNum) {
      alert("Close enough to the correct answer");
    } else {
      alert("Sorry! hard Luck Next Time");
    }
  } else {
    var again = prompt(
      "Please guess the secret number from 0 - 10 only.\nDo you want to play again?",
      "Yes"
    );
    if (again == "Yes" || again == "yes" || again == "YES") {
      question7();
    }
  }
}

function question8() {
  var num = prompt(
    "Hii.. Please eneter any number to check divisible by 3 or not",
    "27"
  );
  if (parseInt(num) % 3 == 0) {
    alert("Congratulation! Number is divisble by 3");
  } else {
    alert("Sorry! Number is not completely divisble by 3");
  }
}

function question9() {
  var num = prompt("Hii.. Please eneter any number to check EVEN or ODD", "27");
  if (parseInt(num) % 2 == 0) {
    alert("EVEN Number!");
  } else {
    alert("ODD Number!");
  }
}

function question9() {
  var num = prompt("Hii.. Please eneter Temprature", "40");
  if (parseInt(num) > 40) {
    alert("It is too hot outside.");
  } else if (parseInt(num) > 30) {
    alert("The Weather today is Normal.");
  } else if (parseInt(num) > 20) {
    alert("Today’s Weather is cool.");
  } else if (parseInt(num) > 10) {
    alert("OMG! Today’s weather is so Cool.");
  } else {
    alert("Weather is not defined! Sorry");
  }
}
