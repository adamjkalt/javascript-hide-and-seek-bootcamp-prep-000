function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(nested){
  return document.querySelector(`div#nested .target`);
}

function increaseRankBy(n){
  var numbers = document.querySelectorAll(`ul.ranked-list li`);
  for (let i=0; i < numbers.length; i++) {
    numbers[i].innerHTML = parseInt(numbers[i].innerHTML) + n;
  }
}

function deepestChild(){
  return document.querySelector('div#grand-node div div div div');
}