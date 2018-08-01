//insert JS for event listener when cat clicked
//insert JS for increment move
const cat1 = document.getElementById("catImg1");
const cat2 = document.getElementById("catImg2");
let clickCount = 0;
const clickCounter = document.getElementById('click1');

cat1.addEventListener("click", changeNum, false);
cat2.addEventListener("click", changeNum, false);

function changeNum(){
    clickCount++;
    clickCounter.innerHTML = clickCount;
  };

//store cat name in JS variable, cat name above cat image

/*
var allCats = [{
name: 'Poplinre',
src: 'images/cat1.jpg',
clickCount: 0,
},
{
  name: 'Cat2',
  src: 'images/cat2.jpg',
  clickCount: 0
}
];

var selectedCat =
document.body.appendChild(allCats);

let clickCount = 0;
const clickCounter = document.getElementById("clicks");

cat1.addEventListener("click", changeNum, false);

function changeNum(){
    clickCount++;
    clickCounter.innerHTML = clickCount;
  };
*/
