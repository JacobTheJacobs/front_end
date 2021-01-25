function toggleDisplay() {
  var x = document.getElementById("drop-menu");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function getDate() {
  var date = (document.getElementById(
    "year"
  ).innerHTML = new Date().getFullYear());
  console.log(date);
}

getDate();
