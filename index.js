function getFirstSelector(selector) {
  var firstSelector = document.querySelector(selector);
  return firstSelector;
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
    var rankedList = document.querySelectorAll('.ranked-list li');

    for ( let i = 0; i < rankedList.length; i++ ) {
        rankedList[i].innerHTML = (parseInt(rankedList[i].innerHTML, 10) + n).toString();
    }
}

function deepestChild() {
    var deepChild = document.querySelector('#grand-node');
    var deeperChild = deepChild.querySelectorAll('div');

    while (deeperChild.length > 1) {
        deeperChild = deeperChild[0].querySelectorAll('div'); 
    }
    return deeperChild[0];
}

/* also used this but IDE was Passing me but not letting me proceed, so idk what's preferable:

function deepestChild() {
    const deepChild = document.querySelector('#grand-node');
    var deeperChild = deepChild.querySelectorAll('div');

    var theDeepestChild = deeperChild[deeperChild.length - 1];

    return theDeepestChild;