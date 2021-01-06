// 1. Declare 3 variables in one statement.
var firVar, secVar, thirVar;

//2. Declare 5 legal & 5 illegal variable names.
//LEGAL VARIABLE NAMES
var my_var, _myvar, varNames, varname, Varname;

//ILLEGAL VARIABLE NAMES
//var 545ds, 456ds, /hjkj, sd dd, 32_sdsd, 56566;

//3. Display this in your browser a)  A heading stating “Rules for naming JS variables” b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable c) Variables must begin with a ______, ______ or _____. For example $name, _name or name d) Variable names are case _________ e) Variable names should not be JS _________
function writeOnPage() {
  document.writeln(
    "<h2>Rules for naming JS variables</h2><br><p>Variable names can only contain, numbers, $ and _. For exapmle: $ my_1stVariable</p>"
  );
  document.writeln(
    "<p>Variable must begin with a letter, $ or _. For example: $name, _name or name</p>"
  );
  document.writeln("<p>Variable names are case senstivie</p>");
  document.writeln("<p>Variable names should not be JS Keywords</p>");
}
