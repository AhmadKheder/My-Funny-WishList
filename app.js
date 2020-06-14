'use strict'
var parsedData;
function Wish(title, expectedDate, comesTrue) {

    this.title = title;
    this.expectedDate = expectedDate;
    this.comesTrue = comesTrue;
    Wish.all.push(this);
}

Wish.all = []
// Wish.prototype.comesTrue = getRandomInt(1, 50);




//get tags
var titleInput = document.getElementById('title');
var pickedDate = document.getElementById('date');
// get values


var submitButton = document.getElementById('go');
var myFrom = document.getElementById('myForm');
// myFrom.addEventListener()
// submitButton.addEventListener('submit', storeToLocalStorage);
var resultTable = document.getElementById('resultTable');
function storeToLocalStorage() {
    var wish = titleInput.value;
    var ExDate = pickedDate.value;
    var comesTrue = getRandomInt()
    new Wish(wish, ExDate, comesTrue);
    storeToStorage();
    getDataFromStorage();
    // console.log(parsedData);
    var newWish = document.createElement('tr');
   
        var wishtitle = document.createElement('td');
        var length = parsedData.length-1
        wishtitle.innerHTML = parsedData[length].title;
        newWish.appendChild(wishtitle);

        var wishHope = document.createElement('td');
        var length = parsedData.length-1
        wishHope.innerHTML = parsedData[length].expectedDate
        newWish.appendChild(wishHope);

        var wishcomesTrue = document.createElement('td');
        var length = parsedData.length-1
        wishcomesTrue.innerHTML = parsedData[length].comesTrue
        newWish.appendChild(wishcomesTrue);

        var del = document.createElement('td');
        del.innerHTML = '<input class="removeBtn" type="button" onclick="removeItemById()" >';
        newWish.appendChild(del);

        resultTable.appendChild(newWish);



    
}
function removeItemById(){

    
}





function storeToStorage() {
    var preperForStorage = JSON.stringify(Wish.all);
    localStorage.setItem('all Objects', preperForStorage);
}

// get storage arr of one object
function getDataFromStorage() {
    var jsonData = localStorage.getItem('all Objects');
     parsedData = JSON.parse(jsonData);
}



//helper

function getRandomInt() {
    return Math.floor(Math.random() * (100 - 1)) + 1; //The maximum is exclusive and the minimum is inclusive
}