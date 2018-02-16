function getFirstSelector(selector){
  document.querySelector(selector);

  return document.querySelector(selector);
}

function nestedTarget(nested){
  document.querySelector(`div#nested`);
  return document.querySelector(`div#nested .target`);
  
}

function increaseRankBy(n){
  var a = document.querySelectorAll(`ul.ranked-list`);
  for (i=0; i < a.length; i++) {
  a[2]
  parseInt(a, n);
  }
  return document.querySelectorAll(`ul.ranked-list`);
}

function deepestChild(){
  
  
}