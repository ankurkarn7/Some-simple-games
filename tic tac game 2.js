let refresh = document.getElementById('refresh');
let astatus = document.getElementById('status');
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let td = document.querySelectorAll('td')
var score1 = 0;
var score2 = 0;
refresh.addEventListener('click', function(){
    location.reload();
})
function resetGame() {
    td.forEach(cell => {
        cell.style.backgroundImage = 'none';
        cell.value = undefined;
    });
    return i=0;
}
var i = 0;
function choice(j){
    if(i%2 == 0){
    td[j].style.backgroundImage="url('cross.jpg')";
    td[j].style.backgroundSize  = 'cover'
    td[j].value= i}
    else{
    td[j].style.backgroundImage="url('zero.jpg')";
    td[j].style.backgroundSize = 'cover';
    td[j].value = i;
    }
    i++;
    if((td[0].value %2 == 0 && td[1].value %2 == 0 && td[2].value %2 == 0) || (td[3].value %2 == 0 && td[4].value %2 == 0 && td[5].value %2 == 0) || (td[6].value %2 == 0 && td[7].value %2 == 0 && td[8].value %2 == 0) || (td[0].value %2 == 0 && td[3].value %2 == 0 && td[6].value %2 == 0) || (td[1].value %2 == 0 && td[4].value %2 == 0 && td[7].value %2 == 0) || (td[2].value %2 == 0 && td[5].value %2 == 0 && td[8].value %2 == 0) || (td[0].value %2 == 0 && td[4].value %2 == 0 && td[8].value %2 == 0) || (td[2].value %2 == 0 && td[4].value %2 == 0 && td[6].value %2 == 0)){
        astatus.innerText = "Player 1 won";
        score1++;
        player1.innerText = score1;
        setTimeout(function(){alert('player 1 won')}, 400);
        setTimeout(resetGame,2000);
    } else if((td[0].value %2 == 1 && td[1].value %2 == 1 && td[2].value %2 == 1) || (td[3].value %2 == 1 && td[4].value %2 == 1 && td[5].value %2 == 1) || (td[6].value %2 == 1 && td[7].value %2 == 1 && td[8].value %2 == 1) || (td[0].value %2 == 1 && td[3].value %2 == 1 && td[6].value %2 == 1) || (td[1].value %2 == 1 && td[4].value %2 == 1 && td[7].value %2 == 1) || (td[2].value %2 == 1 && td[5].value %2 == 1 && td[8].value %2 == 1) || (td[0].value %2 == 1 && td[4].value %2 == 1 && td[8].value %2 == 1) || (td[2].value %2 == 1 && td[4].value %2 == 1 && td[6].value %2 == 1)){
        astatus.innerText = "Player 2 won";
        score2++;
        player2.innerText = score2;
        setTimeout(function() {alert('player 2 won')}, 300);
        setTimeout(resetGame, 2000);
    } else{if(i == 9) {
        astatus.innerText = "draw";
        setTimeout(function(){alert("it's a draw")},300);
        setTimeout(resetGame, 2000);
    }
    }
}
