//insert JS for event listener when cat clicked
//insert JS for increment move
const cat1 = document.getElementById("catImg1");
const cat2 = document.getElementById("catImg2");
let clickCount = 0;
const clickCounter = document.getElementById("clicks");

cat1.addEventListener("click", changeNum, false);

function changeNum(){
    clickCount++;
    clickCounter.innerHTML = clickCount;
  };

//store cat name in JS variable, cat name above cat image

const allCats = [""];
