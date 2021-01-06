function question1() {
  var arr = [];
  alert("JS Literal Notation:\n\nvar arr = [];");
}
function question2() {
  var arr = {};
  alert(" JS Object Notation:\n\nvar arr = {};");
}

function question3() {
  var arr = ["String1", "String2", "String3"];
  alert("Array of Strings\n\nvar arr = ['String1', 'String2', 'String3'];");
}
function question4() {
  var arr = [1, 2, 3];
  alert("Array of Numbers\n\nvar arr = [1, 2, 3];");
}
function question5() {
  var arr = [true, false, true, true];
  alert("Array of Booleans\n\nvar arr = [true, false,true,true];");
}

function question6() {
  var arr = [true, "String1", 1, false, "alpha"];
  alert("Mixed Array\n\nvar arr = [true, 'String1', 1, false,'alpha'];");
}

function question7() {
  var arr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
  document.write("<h2>Qualifications</h2>");
  for (var i = 0; i < arr.length; i++) {
    document.write(
      "<br><p style='font-size:18px; font-weight:bold; line-height:13px'>" +
        (i + 1) +
        ") " +
        arr[i]
    ) + "</p>";
  }
}
function question8() {
  var name = ["Michael", "John", "Tony"];
  var marks = [];
  for (var i = 0; i < name.length; i++) {
    marks[i] = prompt(
      "Please enter marks of " + name[i] + " out of 500",
      "300"
    );
    if (parseInt(marks[i]) > 500) {
      alert("Please refresh and try to enter marks below 500");
      break;
    }
  }
  for (var i = 0; i < marks.length; i++) {
    var percent = (marks[i] * 100) / 500;
    document.write(
      "<p style='font-size:18px; font-weight:bold; line-height:13px'> Score of " +
        name[i] +
        " is " +
        marks[i] +
        ". Percentage: " +
        percent +
        "%"
    );
  }
}

function question9() {
  var colors = ["Red", "Green", "Blue"];
  alert("We have these colors initially\n\n[" + colors + "]");
  var change = prompt(
    "Do you want to add in Beginning?\nIf Yes then please enter color name otherwise enter No",
    "Purple"
  );
  if (change != "No" && change != "NO" && change != "no") {
    colors.unshift(change);
    alert(
      "We have these colors after adding color at Beginning\n\n[" + colors + "]"
    );
  }
  change = prompt(
    "Do you want to add in End?\nIf Yes then please enter color name otherwise enter No",
    "Orange"
  );

  if (change != "No" && change != "NO" && change != "no") {
    colors.push(change);
  }
  alert("We have these colors after adding color at End\n\n[" + colors + "]");
  colors.unshift("Olive", "Pink");
  alert(
    "We have these colors after adding 2 more colors at Beginning\n\n[" +
      colors +
      "]"
  );
  colors.shift();
  alert("After deleting 1 Color from Beginning\n\n[" + colors + "]");
  colors.pop();
  alert("After deleting 1 Color from End\n\n[" + colors + "]");

  change = prompt(
    "Do you want to add more color at Specific Index?\nIf Yes then please enter color name otherwise enter No",
    "Black"
  );
  if (change != "No" && change != "NO" && change != "no") {
    var Index = prompt(
      "Please Enter at Which index you want to place " + change,
      0
    );
    colors.splice(Index, 0, change);
    alert("After adding Color at Specific Index\n\n[" + colors + "]");
  } else {
    alert("We have same Array\n\n[" + colors + "]");
  }

  change = prompt(
    "Do you want to Remove color?\nIf Yes then please enter INDEX number otherwise enter No",
    0
  );
  if (change != "No" && change != "NO" && change != "no") {
    var num = prompt("Please Enter how many Colors do you want to remove?", 1);
    colors.splice(change, num);
    alert("After Removing Color from Specific Index\n\n[" + colors + "]");
  } else {
    alert("We have same Array\n\n[" + colors + "]");
  }
}

function question10() {
  var score = [320, 230, 480, 120];
  document.write("<h2>Scores of Students: " + score + "</h2>");
  document.write("<h2>Ordered Scores of Students: " + score.sort() + "</h2>");
}

function question11() {
  var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
  document.write("<h3>CitiesList:<br>" + cities + "</h3>");
  document.write(
    "<h3>Selected Cities List:<br>" + cities.slice(2, 4) + "</h3>"
  );
}

function question12() {
  var arr = ["This ", "is ", "my ", "cat"];
  document.write("<h3>Array:<br>" + arr + "</h3>");
  var str = "";
  for (var i = 0; i < arr.length; i++) {
    str = str + arr[i];
  }
  document.write("<h3>String:<br>" + str + "</h3>");
}

function question13() {
  var items = ["keyboard", "mouse", "printer", "monitor"];
  document.write("<h3>Devices FIFO:<br>" + items + "</h3><br>");

  document.write("<h3>Out:<br>" + items.splice(0, 1) + "</h3>");
  document.write("<h3>Out:<br>" + items.splice(0, 1) + "</h3>");
  document.write("<h3>Out:<br>" + items.splice(0, 1) + "</h3>");
  document.write("<h3>Out:<br>" + items.splice(0, 1) + "</h3>");
}

function question14() {
  var items = ["keyboard", "mouse", "printer", "monitor"];
  document.write("<h3>Devices LIFO:<br>" + items + "</h3><br>");

  document.write("<h3>Out:<br>" + items.splice(items.length - 1, 1) + "</h3>");
  document.write("<h3>Out:<br>" + items.splice(items.length - 1, 1) + "</h3>");
  document.write("<h3>Out:<br>" + items.splice(items.length - 1, 1) + "</h3>");
  document.write("<h3>Out:<br>" + items.splice(items.length - 1, 1) + "</h3>");
}

function question15() {
  var items = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
  document.write("<h3>Phones Manufactrures:<br>");
  document.write(
    "<br><select style='font-size:16px; padding:5px'><option>" +
      "Phones Manufactrures" +
      "</option>"
  );
  for (var i = 0; i < items.length; i++) {
    document.write("<option>" + items[i] + "</option>");
  }
  document.write("</select>");
}
