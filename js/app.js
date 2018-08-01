//insert JS for event listener when cat clicked
//insert JS for increment move
/* const cat1 = document.getElementById("catImg1");
const cat2 = document.getElementById("catImg2");
let clickCount = 0;
const clickCounter = document.getElementById('click1');

cat1.addEventListener("click", changeNum, false);
cat2.addEventListener("click", changeNum, false);

function changeNum(){
    clickCount++;
    clickCounter.innerHTML = clickCount;
  };
*/

//store cat name in JS variable, cat name above cat image

/*// clear the screen for testing
document.body.innerHTML = '';

var nums = [1,2,3];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

    // This is the number we're on...
    var num = nums[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = num;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(numCopy) {
        return function() {
            alert(numCopy);
        };
    })(num));

    document.body.appendChild(elem);
};

*/
document.body.innerHTML ='';

function() {
  var allCats =
  [{
name: 'Hana',
src: 'images/cat1.jpg',
clickCount: 0,
},
{
  name: 'Ttul',
  src: 'images/cat2.jpg',
  clickCount: 0
},
{
  name: 'Set',
  src: 'images/cat3.jpg',
  clickCount:0
},
{
  name: 'Net',
  src: 'images/cat4.jpg',
  clickCount:0
},
{
  name: 'Tasut',
  src: 'images/cat5.jpg',
  clickCount:0
}
];
};

for (var i = 0; i < allCats.length; i++) {

    // This is the number we're on...
    var selectedCat = allCats[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = selectedCat;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(selectedCatCopy) {
        return function() {
            alert(selectedCatCopy);
        };
    })(selectedCat));

    document.body.appendChild(elem);
};
