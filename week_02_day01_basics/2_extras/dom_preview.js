

var myHeading = document.getElementById('myHeading');
// console.log(myHeading);

myHeading.style.color = 'red'
myHeading.style.backgroundColor = '#222'


var mySecondHeading = document.querySelector('h2');

var myListItems = document.querySelectorAll('li')

console.log(myListItems)

for ( let i = 0; i < myListItems.length; i++){
  myListItems[i].style.color = 'pink'
}