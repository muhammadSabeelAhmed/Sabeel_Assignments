function question1() {
  var charac = prompt("Please enter any character", "A");
  if (charac.length == 1) {
    var n = charac.charCodeAt(charac[0]);
    if (n >= 65 && n <= 90) {
      alert("UPPERCASE Letter");
    } else if (n >= 97 && n <= 122) {
      alert("LOWERCASE Letter");
    } else if (charac >= 0 && charac <= 9) {
      alert("Number");
    } else {
      alert("Character Not Defined");
    }
  } else {
    var again = prompt(
      "Please enter any character only.\nDo you want to check again?",
      "Yes"
    );
    if (again == "Yes" || again == "yes" || again == "YES") {
      question1();
    }
  }
}

function question2() {
  var fnum = prompt("Please enter 1st number", "123");
  var snum = prompt("Please enter 2nd number", "123");

  if (parseInt(fnum) == parseInt(snum)) {
    alert("Both numbers are equal");
  } else if (parseInt(fnum) >= parseInt(snum)) {
    alert("1st Number is Larger");
  } else {
    alert("2nd Number is Larger");
  }
}
function question3() {
  var numb = +prompt(
    "Please enter number to check Positive, Negative or ZERO",
    "123"
  );
  if (numb > 0) {
    alert("positive Number");
  } else if (numb < 0) {
    alert("negative Number");
  } else {
    alert("You entered ZERO");
  }
}

function question4() {
  var charac = prompt("Please enter any character to check VOWEL", "A");
  if (charac.length == 1) {
    if (
      charac == "a" ||
      charac == "e" ||
      charac == "i" ||
      charac == "o" ||
      charac == "u" ||
      charac == "A" ||
      charac == "E" ||
      charac == "I" ||
      charac == "O" ||
      charac == "U"
    ) {
      alert("You Entered Vowel");
    } else {
      alert("Sorry! Not a Vowel");
    }
  } else {
    var again = prompt(
      "Please enter any character only.\nDo you want to check again?",
      "Yes"
    );
    if (again == "Yes" || again == "yes" || again == "YES") {
      question1();
    }
  }
}

function question5() {
  var mypass = prompt("Please set your new Password");
  if (mypass == "") {
    alert("Please enter your password");
  }
  var cpassword = prompt("Please confirm your Password");
  if (cpassword == "") {
    alert("Please enter your password");
  } else if (mypass == cpassword) {
    alert("Correct! The password you entered matches the original password");
  } else {
    alert("Incorrect password");
  }
}
function question6() {
  var greeting;
  var hour = 13;
  if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  alert("If Statment issue resolved\n\n" + greeting);
}

function question7() {
  var mypass = prompt("Please enter time", "1900");
  if (mypass.length == 4) {
    if (mypass < 1200 || mypass == 2400 || mypass == 0000) {
      alert(
        "Good Morning! its " +
          mypass[0] +
          mypass[1] +
          ":" +
          mypass[2] +
          mypass[3] +
          " AM"
      );
    } else if (mypass >= 1200 && mypass < 1700) {
      alert(
        "Good Afternoon! its" +
          mypass[0] +
          mypass[1] +
          ":" +
          mypass[2] +
          mypass[3] +
          " PM"
      );
    } else if (mypass >= 1700 && mypass < 2100) {
      alert(
        "Good Evening! its" +
          mypass[0] +
          mypass[1] +
          ":" +
          mypass[2] +
          mypass[3] +
          " PM"
      );
    } else if (mypass >= 2100 && mypass < 2400) {
      alert(
        "Good night! its" +
          mypass[0] +
          mypass[1] +
          ":" +
          mypass[2] +
          mypass[3] +
          " PM"
      );
    } else {
      alert("Please enter time between 0000 - 24000");
    }
  } else {
    alert("Please enter time between 0000 - 24000");
  }
}
