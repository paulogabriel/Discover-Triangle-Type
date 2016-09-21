var valueOne = document.getElementById("sideOne");
var valueTwo = document.getElementById("sideTwo");
var valueThree = document.getElementById("sideThree");
var result  = document.getElementById("result");
var i = 0;
var list = [];

////////////////////////////
// BEGIN OF MAIN FUNCTION //
////////////////////////////
//start reading the value of each input
function getValues(){
  var sideA = parseFloat(valueOne.value);
  var sideB = parseFloat(valueTwo.value);
  var sideC = parseFloat(valueThree.value);
  valueChecker(sideA,sideB,sideC);
}

//then check it as being not a number,
function valueChecker(sideA,sideB,sideC){
  if ( isNaN(sideA) || isNaN(sideB) || isNaN(sideC) ){
    alert("Only numbers are allowed!");
  }
  else if (sideA === 0 || sideB === 0 || sideC === 0){
    alert("Only numbers different from ZERO are allowed!");
  }
  else {
    possibilityChecker(sideA,sideB,sideC);
  }  
}

function possibilityChecker(sideA,sideB,sideC){
  if ( (sideA < sideB + sideC) && (sideB < sideA + sideC) && (sideC < sideA + sideB) ){
      list.push(new Triangle(sideA,sideB,sideC,name));
      console.info(JSON.stringify(list));
      printRestart();
    }
    else {
      alert("These values don't build a triangle!");
    }
}

function printRestart(sideA,sideB,sideC){
  //print the latest triangle on screen
    result.innerHTML = '<li>Triangle '+(list.length)+': '+list[list.length-1].sideOne+', '+list[list.length-1].sideTwo+', '+list[list.length-1].sideThree+' = '+list[list.length-1].name+'</li>'; 
    //empty input fields
    valueOne.value = "";
    valueTwo.value = "";
    valueThree.value = "";
    document.forms[0].elements[0].focus();
}

function Triangle(sideA,sideB,sideC,name){
  this.sideOne = sideA;
  this.sideTwo = sideB;
  this.sideThree = sideC;
  this.name = triangleTypeChecker(sideA,sideB,sideC);
}

function triangleTypeChecker(sideA,sideB,sideC){
  if (sideA == sideB && sideB == sideC ){
    return "Equilateral";
  }
  else if (sideA !== sideB && sideB !== sideC && sideA !== sideC){
    return "Scalene"; 
  }
  else {
    return "Isosceles";
  }
}

/////////////////////
// EXTRA FUNCTIONS //
/////////////////////
function clearAll() {
  result.innerHTML = "";
}
function listAll() {
  if ( list === undefined || list.length === 0 ){
    result.innerHTML = "There are no triangles!";
  }
  else {
    result.innerHTML = "";
    for(i=0; i < list.length; i++ ){
      result.innerHTML += '<li>Triangle '+(i+1)+': '+list[i].sideOne+', '+list[i].sideTwo+', '+list[i].sideThree+' = '+list[i].name+'</li>';
    }
  }
}
function listEquilateral() {
  result.innerHTML = "";
  for(i=0; i < list.length; i++ ){
    if ( list[i].name === "Equilateral" ){
      result.innerHTML += '<li>Triangle '+(i+1)+': '+list[i].sideOne+', '+list[i].sideTwo+', '+list[i].sideThree+' = '+list[i].name+'</li>';
    }
  }
}
function listIsosceles() {
  result.innerHTML = "";
  for(i=0; i < list.length; i++ ){
    if ( list[i].name === "Isosceles" ){
      result.innerHTML += '<li>Triangle '+(i+1)+': '+list[i].sideOne+', '+list[i].sideTwo+', '+list[i].sideThree+' = '+list[i].name+'</li>';
    }
  }
}
function listScalene() {
  result.innerHTML = "";
  for(i=0; i < list.length; i++ ){
    if ( list[i].name === "Scalene" ){
      result.innerHTML += '<li>Triangle '+(i+1)+': '+list[i].sideOne+', '+list[i].sideTwo+', '+list[i].sideThree+' = '+list[i].name+'</li>';
    }
  }
}
function deleteAll() {
  if ( list === undefined || list.length === 0 ){
    result.innerHTML = "There's no data to delete!";
  }
  else {
    list = [];
    result.innerHTML = "Triangles deleted.";
  }
}

// Run functions on ENTER press
valueThree.onkeydown = function(e){
   if(e.keyCode == 13){
     getValues();
   }
};
document.getElementById('begin').onkeydown = function(e){
   if(e.keyCode == 13){
     getValues();
   }
};
document.getElementById('clear').onkeydown = function(e){
   if(e.keyCode == 13){
     clearAll();
   }
};
document.getElementById('all').onkeydown = function(e){
   if(e.keyCode == 13){
     listAll();
   }
};
document.getElementById('equilateral').onkeydown = function(e){
   if(e.keyCode == 13){
     listEquilateral();
   }
};
document.getElementById('isosceles').onkeydown = function(e){
   if(e.keyCode == 13){
     listIsosceles();
   }
};
document.getElementById('scalene').onkeydown = function(e){
   if(e.keyCode == 13){
     listScalene();
   }
};
document.getElementById('delete').onkeydown = function(e){
   if(e.keyCode == 13){
     deleteAll();
   }
};