function addOneThird(){
    var allFigures = document.getElementsByTagName('figure');
    for (let i = 0; i < allFigures.length; i++) {
        allFigures[i].classList.add("one-third");
    }
}
window.addEventListener('load', addOneThird);

var foot = document.querySelector('footer');
function hideFooter(){
    foot.style.display = 'none';
}
foot.addEventListener('click', hideFooter);

var fifthFig = document.querySelectorAll('figure')[4];
function hideFigure(){
    fifthFig.style.visibility = 'hidden';
}
fifthFig.addEventListener('dblclick', hideFigure);

var firstCap = document.querySelector('figure > figcaption');
var oriFont = firstCap.style.fontFamily
function changeCursive(){
    firstCap.style.fontFamily = 'Cursive';
}
function changeBack(){
    firstCap.style.fontFamily = oriFont;
}
firstCap.addEventListener('mouseover', changeCursive);
firstCap.addEventListener('mouseout', changeBack);

firstCap.tabIndex = 1;
firstCap.addEventListener('focus', changeCursive);
firstCap.addEventListener('focusout', changeBack);