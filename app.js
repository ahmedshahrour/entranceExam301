'use strict'

var myForm = document.getElementById('my from');
var outTable = document.getElementById('outTable');

var movielist = [];

function kindmovie (kind , quan){

this.kind =kind ;
this.quan = quan ;

movielist.push(this);

}

function update(){
var stringmovie =JSON.stringify(movielist);
localStorage.setItem('list' , stringmovie);

}

function getlist(){

var stringmovie =localStorage.getItem('list'),

if (stringmovie){
    

        movielist = JSON.parse(stringmovie);
        renderList();
    }
}

myForm.addEventListener('submit' ,handleSumit);

function handleSumit(event){

    event.preventDefault();

    var kind =event.target.kind.value;
    var quan =event.target.quan.value;

    new kindmovie(kind,quan)

    update();
getlist();
}

var tableMain =documnet.createElemnt('table');

outTable.appendChild(tableMain);

var row1 =document.createElement('tr');

tableMain.appendChild(row1);

var thE1 =document.createElement('th');
row1.appendChild(thE1);
var thE2 =document.createElement('th');

row1.appendChild(thE2);

thE1.textContent =`Name`;
thE2.textContent = `image`;

vartotal =0;

function renderList(){

    for (var i=0 ; i<movielist ; i++){

        var row2 =document.createElement('tr');
        tableMain.appendChild(row2);
        var tdE1 =document.createElement('td');
        row2.appendChild(tdE1);
        var tdE2 =document.createElement('td');

        row2.appendChild(tdE2);

        
        tdE1.textContent = `${movielist[i].kind}`;
        tdE2.textContent = `${movielist[i].quan}`;
        total = total +parseInt(movielist[i].quan);
    }

 console.log(total);

}

var row3 =document.createElement('tr');
tableMain.appendChild(row3);
var tdE3 =document.createElement('td');
row3.appendChild(tdE3);
var tdE4 =document.createElement('td');
row3.appendChild(tdE4);
tdE3.textContent =`total quantity`;
tdE4.textContent =`${total}`;

getlist();



