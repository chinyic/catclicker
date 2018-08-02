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

/*function () {
  let allCats =
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
*/

var allCats = ["Hana", "Ttul", "Set", "Net", "Tasut"];


for (var i = 0; i < allCats.length; i++) {

    // This is the number we're on...
    var selectedCat = allCats[i];

    // We're creating a DOM element for the number
    var ul = document.getElementById('catList');
    var li = document.createElement('li');
    ul.appendChild(li);

    li.textContent = selectedCat;

    // ... and when we click, alert the value of `num`
    li.addEventListener('click', (function(selectedCatCopy) {
        return function() {
            alert(selectedCatCopy);

        };
    })(selectedCat));

};

/*Visuals
The application should display

a list of at least 5 cats, listed by name
an area to display the selected cat
In the cat display area, the following should be displayed

the cat's name
a picture of the cat
text showing the number of clicks
The specifics of the layout do not matter, so style it however you'd like.
Interaction
When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.
The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.*/
