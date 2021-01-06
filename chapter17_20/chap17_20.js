function question1() {
  var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  console.log("MultiDimensions Array: " + arr);
  alert(
    "Multidimenions Array:\n\nvar arr = [ [1, 2, 3],  [4, 5, 6], [7, 8, 9], [10, 11, 12] ];"
  );
}

function question2() {
  var arr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
  ];
  console.log("MultiDimensions Array: " + arr);
  document.write("<h2>Multidimenions Array:</h2>\n\n");
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      document.write(
        "<div style='min-width:50px;min-height:50px;text-align:center;color:blue; font-size:20px;font-weight:bold;display:inline-block'>" +
          arr[i][j] +
          "</div>"
      );
    }
    document.write("<br>");
  }
}
function question3() {
  document.write("<h2>Numeric Counting (1 - 10):</h2>\n\n");
  for (var i = 1; i <= 10; i++) {
    document.write(
      "<div style='min-width:50px;min-height:30px;text-align:left;margin-left:20px;color:blue; font-size:20px;font-weight:bold;'>" +
        i +
        "</div>"
    );
  }
}

function question4() {
  var table = parseInt(prompt("Which table you want to print?", 2));
  var length = parseInt(
    prompt("Please advice length of a multiplication table", 10)
  );
  if (length > 0 && table > 1) {
    document.write(
      "<h2>Multiplication table of " +
        table +
        "\nLength " +
        length +
        "</h2>\n\n"
    );

    for (var i = 0; i <= length; i++) {
      document.write(
        "<div style='min-width:50px;min-height:30px;text-align:left;margin-left:20px;color:blue; font-size:20px;font-weight:bold;'>" +
          i +
          " x " +
          table +
          " = " +
          i * table +
          "</div>"
      );
    }
  } else {
    var again = prompt(
      "Please enter correct number\ntabel>1\nlength>0\nDo you want to print again?",
      "Yes"
    );
    if (again == "Yes" || again == "yes" || again == "YES") {
      question4();
    }
  }
}

function question5() {
  var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
  for (var i = 0; i < fruits.length; i++) {
    document.write(
      "<div style='min-width:50px;min-height:30px;text-align:left;margin-left:20px;color:blue; font-size:20px;font-weight:bold;'>" +
        fruits[i] +
        "</div>"
    );
  }

  for (var i = 0; i < fruits.length; i++) {
    document.write(
      "<div style='min-width:50px;min-height:30px;text-align:left;margin-left:20px;color:blue; font-size:20px;font-weight:bold;'> Element at index " +
        i +
        " is " +
        fruits[i] +
        "</div>"
    );
  }
}

function question6() {
  var count = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];
  var even = [];
  var odd = [];
  var series = [];
  document.write(
    "<div style='min-width:50px;min-height:30px;text-align:left;margin-left:20px;color:blue; font-size:20px;font-weight:bold;'>Counting:<br>" +
      count.slice(1, 16) +
      "</div>"
  );
  document.write(
    "<br><div style='min-width:50px;min-height:30px;text-align:left;margin-left:20px;color:blue; font-size:20px;font-weight:bold;'>Reverse Counting:<br>" +
      count.slice(1, 11).reverse() +
      "</div>"
  );
  for (var i = 0; i < count.length; i++) {
    if (count[i] % 2 == 0) {
      even.push(count[i]);
    } else {
      odd.push(count[i]);
    }
  }
  document.write(
    "<br><div style='min-width:50px;min-height:30px;text-align:left;margin-left:20px;color:blue; font-size:20px;font-weight:bold;'>Even:<br>" +
      even +
      "</div>"
  );
  document.write(
    "<br><div style='min-width:50px;min-height:30px;text-align:left;margin-left:20px;color:blue; font-size:20px;font-weight:bold;'>Odd: <br>" +
      odd +
      "</div>"
  );
  for (var i = 2000; i <= 20000; i += 2000) {
    series.push(i);
  }
  document.write(
    "<br><div style='min-width:50px;min-height:30px;text-align:left;margin-left:20px;color:blue; font-size:20px;font-weight:bold;'>Series:<br>" +
      series +
      "</div>"
  );
}

function question7() {
  var a = ["cake", "apple pie", "cookie", "chips", "patties"];
  var userinput = prompt(
    "Welcome to ABC Bakers, What do you want to order Sir/Ma'am?",
    "cookie"
  );
  var check = false;
  for (var i = 0; i < a.length; i++) {
    if (a[i] == userinput) {
      check = true;
      document.write(
        "<div style='min-width:50px;min-height:30px;text-align:left;margin-left:20px; font-size:20px;'><br>" +
          userinput +
          " is <b>available</b> at index " +
          i +
          " in our bakery</div>"
      );
      break;
    }
  }
  if (check == false) {
    document.write(
      "<br><div style='min-width:50px;min-height:30px;text-align:left;margin-left:20px;font-size:20px;'><br>we are Sorry. " +
        userinput +
        " is <b>not available</b> in our bakery</div>"
    );
  }
}

function question8() {
  var arr = [24, 53, 78, 91, 12];
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  document.write(
    "<div style='min-width:50px;min-height:30px;text-align:left;margin-left:20px;font-size:20px;font-weight:bold'><br>Array Items:<br>" +
      arr +
      "<br><br>The largest number is " +
      max +
      "</div>"
  );
}

function question9() {
  var arr = [24, 53, 78, 91, 12];
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  document.write(
    "<div style='min-width:50px;min-height:30px;text-align:left;margin-left:20px;font-size:20px;font-weight:bold'><br>Array Items:<br>" +
      arr +
      "<br><br>The smallest number is " +
      min +
      "</div>"
  );
}

function question10() {
  var arr = [];
  for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
      arr.push(i);
    }
  }
  document.write(
    "<div style='min-width:50px;min-height:30px;text-align:left;margin-left:20px;font-size:20px;font-weight:bold'><br>Multiples of 5 ranging 1 to 100:<br>" +
      arr +
      "</div>"
  );
}
