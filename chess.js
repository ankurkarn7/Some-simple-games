let td = document.querySelectorAll('td');
var i=0;
var k;
var backgroundImage;
function changeBackground(j) {
    if (i%2 == 0) {
    backgroundImage = window.getComputedStyle(td[j]).backgroundImage;
    k = j;
    } else {
        if (j!= k) {
        td[j].style.backgroundImage =backgroundImage;
        td[j].style.backgroundSize = 'cover';
        td[k].style.backgroundImage='none';
    }}
    i++;
}