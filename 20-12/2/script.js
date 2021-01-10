var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

function jump() {
  //add class
  if (character.classList == "animate") {
    return;
  }
  character.classList.add("animate");
  //move character down class
  setTimeout(function () {
    //remove class
    character.classList.remove("animate");
  }, 300);
}
var checkDead = setInterval(function () {
  //return top position of character
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  //return left position of block
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  //check pos of character colide with block pos
  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 110) {
    //end game
    block.style.animation = "none";
    alert("Game Over. score: " + Math.floor(counter / 100));
    counter = 0;
    block.style.animation = "block 1s infinite linear";
    //continue game
  } else {
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
}, 10);
