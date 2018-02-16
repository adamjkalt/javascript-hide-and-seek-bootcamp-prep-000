function getFirstSelector(selector){
  document.querySelector(selector);

  return document.querySelector(selector);
}

function nestedTarget(nested){
  document.querySelector(`div#nested`);
  return document.querySelector(`div#nested .target`);
  
}

function increaseRankBy(n){
  document.querySelectorAll(`ul.ranked-list`);
  parseInt(`ul.ranked-list`, n);
  return document.querySelectorAll(`ul.ranked-list`);
}

function deepestChild(){
  
  
}