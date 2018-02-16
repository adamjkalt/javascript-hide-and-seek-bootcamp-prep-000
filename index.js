function getFirstSelector(selector){
  document.querySelector(selector);

  return document.querySelector(selector);
}

function nestedTarget(nested){
  document.querySelector(`div#nested`);
  return document.querySelector(`div#nested .target`);
  
}

function increaseRankBy(n){
  document.querySelector(`ul#ranked-list`);
  parseInt(`ul#ranked-list`, n);
  return document.querySelector(`ul#ranked-list`);
}

function deepestChild(){
  
  
}