function question1() {
  var num = parseInt(prompt("Please enter number", 10));
  document.write(
    "Result:<br>The value of a is: " +
      num +
      "<br>...........................................<br><br>The value of ++a is: " +
      ++num +
      "<br>Now the value of a is: " +
      num +
      "<br><br>The value of a++ is: " +
      num++ +
      "<br>Now the value of a is: " +
      num +
      "<br><br>The value of --a is: " +
      --num +
      "<br>Now the value of a is: " +
      num +
      "<br><br>The value of a-- is: " +
      num-- +
      "<br>Now the value of a is: " +
      num
  );
}

function question2() {
  var a = 2,
    b = 1;

  //--a
  --a;
  document.write(
    "<b>1) --a</b><br>a is " +
      a +
      "<br>b is " +
      b +
      "<br>result is " +
      (--a - --b + ++b + b--)
  );

  //--a - --b
  --a - --b;
  document.write(
    "<b><br><br>1) --a - --b</b><br>a is " +
      a +
      "<br>b is " +
      b +
      "<br>result is " +
      (--a - --b + ++b + b--)
  );

  // --a - --b + ++b
  --a - --b + ++b;
  document.write(
    "<b><br><br>1)  --a - --b + ++b</b><br>a is " +
      a +
      "<br>b is " +
      b +
      "<br>result is " +
      (--a - --b + ++b + b--)
  );

  // --a - --b + ++b + b--
  --a - --b + ++b + b--;
  document.write(
    "<b><br><br>1) --a - --b + ++b + b--</b><br>a is " +
      a +
      "<br>b is " +
      b +
      "<br>result is " +
      (--a - --b + ++b + b--)
  );
}

function question3() {
  var name = prompt("Please enter your name", "Sabeel");
  alert("Welcome Sabeel! Please Like & Subscribe our You Tube Channel");
}

function question5() {
  var number = prompt("Please enter number to print Multiplication Table", 5);
  document.write("<h2>Multiplication table of " + number + ":<br></h2>");
  for (var i = 1; i <= 20; i++) {
    document.write(i + " x " + number + " = " + i * number + "<br>");
  }
}

function question6() {
  var sub1 = prompt("Please enter 1st Subject Name", "Urdu");
  var sub2 = prompt("Please enter 1st Subject Name", "English");
  var sub3 = prompt("Please enter 1st Subject Name", "Math");
  if (sub1 != "" && sub2 != "" && sub3 != "") {
    var sub1 = parseInt(
      prompt("Please enter  Marks Obtained in " + sub1, "Urdu")
    );
    var sub2 = parseInt(
      prompt("Please enter Marks Obtained in " + sub2, "English")
    );
    var sub3 = parseInt(
      prompt("Please enter Marks Obtained in " + sub3, "Math")
    );

    if (sub1 != "" && sub2 != "" && sub3 != "") {
document.write("")

    } else {
      alert("Need to enter all subject Marks");
    }
  } else {
    alert("Need to enter all subjects");
  }
}
