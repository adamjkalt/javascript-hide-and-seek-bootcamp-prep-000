function getFirstSelector(selector){
  document.querySelector(selector);

  return document.querySelector(selector);
}

function nestedTarget(nested){
  document.querySelector(`div#nested`);
  return document.querySelector(`div#nested .target`);
  
}

function increaseRankBy(n){
  var numbers = document.querySelectorAll(`ul.ranked-list`);
  for (let i=0; i < numbers.length; i++) {
    var numberString = numbers[i];
    var numberSolution = parseInt(numberString) + n;
  }
}

function deepestChild(){
  
  
}