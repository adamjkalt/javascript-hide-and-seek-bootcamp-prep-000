function getFirstSelector(selector){
  document.querySelector(selector);

  return document.querySelector(selector);
}

function nestedTarget(nested){
  document.querySelector(`div#nested`);
  return document.querySelector(`div#nested .target`);
  
}

function increaseRankBy(n){
  var numbers = document.querySelectorAll(`ul.ranked-list li`);
  for (let i=0; i < numbers.length; i++) {
    numbers[i].innerHTML = parseInt(numbers[i].innerHTML) + n;
  }
}

function deepestChild(){
  
  
}