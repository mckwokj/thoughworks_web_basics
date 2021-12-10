var firstCount = 0;
var secondCount = 0;

function onFirstButtonClick(value) {
  value == "plus" ? ++firstCount : --firstCount
  document.getElementById("first").innerHTML = firstCount;
  sum()
}


function onSecondButtonClick(value) {
  value == "plus" ? ++secondCount : --secondCount
  document.getElementById("second").innerHTML = secondCount;
  sum()
}

function sum() {
  document.getElementById("sum").innerHTML = "sum: " + (firstCount + secondCount);
}