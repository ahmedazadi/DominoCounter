function addByFive(teamName, number) {
  var tName = "#team-" + teamName + "-score";

  var oldValue = document.querySelector(tName).innerHTML;
  oldValue = parseInt(oldValue);

  document.querySelector(tName).innerHTML = oldValue + number;
}

function addToTeam(teamName) {
  var tName = "#team-" + teamName + "-score";
  var tValue = "#team-" + teamName + "-custom";

  var oldValue = document.querySelector(tName).innerHTML;
  oldValue = parseInt(oldValue);

  var newValue = document.querySelector(tValue).value;

  if (newValue != "") {
    newValue = parseInt(newValue);
    document.querySelector(tName).innerHTML = oldValue + newValue;
  }
}

function subFromTeam(teamName) {
  var tName = "#team-" + teamName + "-score";
  var nValue = "#team-" + teamName + "-custom";

  var oldValue = document.querySelector(tName).innerHTML;
  oldValue = parseInt(oldValue);

  var newValue = document.querySelector(nValue).value;

  if (newValue != "") {
    newValue = parseInt(newValue);
    document.querySelector(tName).innerHTML = oldValue - newValue;
  }
}

