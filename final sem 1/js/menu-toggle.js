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

let switchTheme = document.getElementById("switchTheme");

switchTheme.onclick = function () {
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "/css/main.css") {
    theme.href = "/css/main-black.css";
    console.log("black");
  } else {
    theme.href = "/css/main.css";
    console.log("white");
  }
};
