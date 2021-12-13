let firstRowCount = 0;
let secondRowCount = 0;

// onSetCalculateSum
function onSetFirstRowCountAndCalculateSum(value) {
  value == "plus" ? ++firstRowCount : --firstRowCount
  document.getElementById("first").innerHTML = firstRowCount;
  calculateSum()
}

// onCalculateSum
function onSetSecondRowCountAndCalculateSum(value) {
  value == "plus" ? ++secondRowCount : --secondRowCount
  document.getElementById("second").innerHTML = secondRowCount;
  calculateSum()
}

function calculateSum() {
  document.getElementById("sum").innerHTML = "sum: " + (firstRowCount + secondRowCount);
}