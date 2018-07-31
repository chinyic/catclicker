//insert JS for event listener when cat clicked
//insert JS for increment move
const catImg = document.getElementById("catImg1");
let clickCount = 0;
const clickCounter = document.getElementById("clicks");

catImg.addEventListener("click", changeNum, false);

function changeNum(){
    clickCount++;
    clickCounter.innerHTML = clickCount;
  };
