var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');
var img6 = document.getElementById('img6');
var img7 = document.getElementById('img7');
var img8 = document.getElementById('img8');
var img9 = document.getElementById('img9');
let reset = document.getElementById('reset');
var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0; //for purpose of putting image of winner
var k = 0;
let td = document.querySelectorAll('td');
function choice(j) {
    if (k%2 == 0) {
        td[j].style.backgroundImage= "url(cross.jpg)"
        td[j].style.backgroundSize="cover";
        td[j].value=k;
    }
    else{
        td[j].style.backgroundImage="url(zero.jpg)";
        td[j].style.backgroundSize="cover";
        td[j].value=k;
    }
    k++;
    check();
}
function check(){
    if((td[1].value %2 == 0 && td[2].value %2 == 0 && td[3].value %2 == 0) || (td[6].value %2 == 0 && td[4].value %2 == 0 && td[5].value %2 == 0) || (td[9].value %2 == 0 && td[7].value %2 == 0 && td[8].value %2 == 0) || (td[1].value %2 == 0 && td[4].value %2 == 0 && td[7].value %2 == 0) || (td[2].value %2 == 0 && td[5].value %2 == 0 && td[8].value %2 == 0) || (td[3].value %2 == 0 && td[6].value %2 == 0 && td[9].value %2 == 0) || (td[1].value %2 == 0 && td[5].value %2 == 0 && td[9].value %2 == 0) || (td[3].value %2 == 0 && td[5].value %2 == 0 && td[7].value %2 == 0)){
        if(a==0){img1.src='cross.jpg'
        a++;
        td[0].value=0}
    } if((td[1].value %2 == 1 && td[2].value %2 == 1 && td[3].value %2 == 1) || (td[6].value %2 == 1 && td[4].value %2 == 1 && td[5].value %2 == 1) || (td[9].value %2 == 1 && td[7].value %2 == 1 && td[8].value %2 == 1) || (td[1].value %2 == 1 && td[4].value %2 == 1 && td[7].value %2 == 1) || (td[2].value %2 == 1 && td[5].value %2 == 1 && td[8].value %2 == 1) || (td[3].value %2 == 1 && td[6].value %2 == 1 && td[9].value %2 == 1) || (td[1].value %2 == 1 && td[5].value %2 == 1 && td[9].value %2 == 1) || (td[3].value %2 == 1 && td[5].value %2 == 1 && td[7].value %2 == 1)){
        if(a==0){img1.src = 'zero.jpg'
    a++;
    td[0].value=1}
    } if((td[11].value %2 == 0 && td[12].value %2 == 0 && td[13].value %2 == 0) || (td[16].value %2 == 0 && td[14].value %2 == 0 && td[15].value %2 == 0) || (td[19].value %2 == 0 && td[17].value %2 == 0 && td[18].value %2 == 0) || (td[11].value %2 == 0 && td[14].value %2 == 0 && td[17].value %2 == 0) || (td[12].value %2 == 0 && td1[5].value %2 == 0 && td[18].value %2 == 0) || (td[13].value %2 == 0 && td[16].value %2 == 0 && td[19].value %2 == 0) || (td[11].value %2 == 0 && td[15].value %2 == 0 && td[19].value %2 == 0) || (td[13].value %2 == 0 && td[15].value %2 == 0 && td[17].value %2 == 0)){
        if(b==0){img2.src ='cross.jpg'
    b++;
    td[10].value=0}
    } if((td[11].value %2 == 1 && td[12].value %2 == 1 && td[13].value %2 == 1) || (td[16].value %2 == 1 && td[14].value %2 == 1 && td[15].value %2 == 1) || (td[19].value %2 == 1 && td[17].value %2 == 1 && td[18].value %2 == 1) || (td[11].value %2 == 1 && td[14].value %2 == 1 && td[17].value %2 == 1) || (td[12].value %2 == 1 && td[15].value %2 == 1 && td[18].value %2 == 1) || (td[13].value %2 == 1 && td[16].value %2 == 1 && td[19].value %2 == 1) || (td[11].value %2 == 1 && td[15].value %2 == 1 && td[19].value %2 == 1) || (td[13].value %2 == 1 && td[15].value %2 == 1 && td[17].value %2 == 1)){
        if(b==0){img2.src='zero.jpg'
    b++;
    td[10].value=1}
    } if((td[21].value %2 == 0 && td[22].value %2 == 0 && td[23].value %2 == 0) || (td[26].value %2 == 0 && td[24].value %2 == 0 && td[25].value %2 == 0) || (td[29].value %2 == 0 && td[27].value %2 == 0 && td[28].value %2 == 0) || (td[21].value %2 == 0 && td[24].value %2 == 0 && td[27].value %2 == 0) || (td[22].value %2 == 0 && td[25].value %2 == 0 && td[28].value %2 == 0) || (td[23].value %2 == 0 && td[26].value %2 == 0 && td[29].value %2 == 0) || (td[21].value %2 == 0 && td[25].value %2 == 0 && td[29].value %2 == 0) || (td[23].value %2 == 0 && td[25].value %2 == 0 && td[27].value %2 == 0)){
        if(c==0){img3.src='cross.jpg'
    c++;
    td[20].value=0}
    } if((td[21].value %2 == 1 && td[22].value %2 == 1 && td[23].value %2 == 1) || (td[26].value %2 == 1 && td[24].value %2 == 1 && td[25].value %2 == 1) || (td[29].value %2 == 1 && td[27].value %2 == 1 && td[28].value %2 == 1) || (td[21].value %2 == 1 && td[24].value %2 == 1 && td[27].value %2 == 1) || (td[22].value %2 == 1 && td[25].value %2 == 1 && td[28].value %2 == 1) || (td[23].value %2 == 1 && td[26].value %2 == 1 && td[29].value %2 == 1) || (td[21].value %2 == 1 && td[25].value %2 == 1 && td[29].value %2 == 1) || (td[23].value %2 == 1 && td[25].value %2 == 1 && td[27].value %2 == 1)){
        if(c==0){img3.src = 'zero.jpg'
    c++;
    td[20].value=1}
    } if((td[31].value %2 == 0 && td[32].value %2 == 0 && td[33].value %2 == 0) || (td[36].value %2 == 0 && td[34].value %2 == 0 && td[35].value %2 == 0) || (td[39].value %2 == 0 && td[37].value %2 == 0 && td[38].value %2 == 0) || (td[31].value %2 == 0 && td[34].value %2 == 0 && td[37].value %2 == 0) || (td[32].value %2 == 0 && td[35].value %2 == 0 && td[38].value %2 == 0) || (td[33].value %2 == 0 && td[36].value %2 == 0 && td[39].value %2 == 0) || (td[31].value %2 == 0 && td[35].value %2 == 0 && td[39].value %2 == 0) || (td[33].value %2 == 0 && td[35].value %2 == 0 && td[37].value %2 == 0)){
        if(d==0){img4.src='cross.jpg'
        d++;
        td[30].value=0}
    } if((td[31].value %2 == 1 && td[32].value %2 == 1 && td[33].value %2 == 1) || (td[36].value %2 == 1 && td[34].value %2 == 1 && td[35].value %2 == 1) || (td[39].value %2 == 1 && td[37].value %2 == 1 && td[38].value %2 == 1) || (td[31].value %2 == 1 && td[34].value %2 == 1 && td[37].value %2 == 1) || (td[32].value %2 == 1 && td[35].value %2 == 1 && td[38].value %2 == 1) || (td[33].value %2 == 1 && td[36].value %2 == 1 && td[39].value %2 == 1) || (td[31].value %2 == 1 && td[35].value %2 == 1 && td[39].value %2 == 1) || (td[33].value %2 == 1 && td[35].value %2 == 1 && td[37].value %2 == 1)){
        if(d==0){img4.src = 'zero.jpg'
    d++;
    td[30].value=1}
    } if((td[41].value %2 == 0 && td[42].value %2 == 0 && td[43].value %2 == 0) || (td[46].value %2 == 0 && td[44].value %2 == 0 && td[45].value %2 == 0) || (td[49].value %2 == 0 && td[47].value %2 == 0 && td[48].value %2 == 0) || (td[41].value %2 == 0 && td[44].value %2 == 0 && td[47].value %2 == 0) || (td[42].value %2 == 0 && td[45].value %2 == 0 && td[48].value %2 == 0) || (td[43].value %2 == 0 && td[46].value %2 == 0 && td[49].value %2 == 0) || (td[41].value %2 == 0 && td[45].value %2 == 0 && td[49].value %2 == 0) || (td[43].value %2 == 0 && td[45].value %2 == 0 && td[47].value %2 == 0)){
        if(e==0){img5.src='cross.jpg'
        e++;
        td[40].value=0}
    } if((td[41].value %2 == 1 && td[42].value %2 == 1 && td[43].value %2 == 1) || (td[46].value %2 == 1 && td[44].value %2 == 1 && td[45].value %2 == 1) || (td[49].value %2 == 1 && td[47].value %2 == 1 && td[48].value %2 == 1) || (td[41].value %2 == 1 && td[44].value %2 == 1 && td[47].value %2 == 1) || (td[42].value %2 == 1 && td[45].value %2 == 1 && td[48].value %2 == 1) || (td[43].value %2 == 1 && td[46].value %2 == 1 && td[49].value %2 == 1) || (td[41].value %2 == 1 && td[45].value %2 == 1 && td[49].value %2 == 1) || (td[43].value %2 == 1 && td[45].value %2 == 1 && td[47].value %2 == 1)){
        if(e==0){img5.src = 'zero.jpg'
    e++;
    td[40].value=1}
    } if((td[51].value %2 == 0 && td[52].value %2 == 0 && td[53].value %2 == 0) || (td[56].value %2 == 0 && td[54].value %2 == 0 && td[55].value %2 == 0) || (td[59].value %2 == 0 && td[57].value %2 == 0 && td[58].value %2 == 0) || (td[51].value %2 == 0 && td[54].value %2 == 0 && td[57].value %2 == 0) || (td[52].value %2 == 0 && td[55].value %2 == 0 && td[58].value %2 == 0) || (td[53].value %2 == 0 && td[56].value %2 == 0 && td[59].value %2 == 0) || (td[51].value %2 == 0 && td[55].value %2 == 0 && td[59].value %2 == 0) || (td[53].value %2 == 0 && td[55].value %2 == 0 && td[57].value %2 == 0)){
        if(f==0){img6.src='cross.jpg'
        f++;
        td[50].value=0}
    } if((td[51].value %2 == 1 && td[52].value %2 == 1 && td[53].value %2 == 1) || (td[56].value %2 == 1 && td[54].value %2 == 1 && td[55].value %2 == 1) || (td[59].value %2 == 1 && td[57].value %2 == 1 && td[58].value %2 == 1) || (td[51].value %2 == 1 && td[54].value %2 == 1 && td[57].value %2 == 1) || (td[52].value %2 == 1 && td[55].value %2 == 1 && td[58].value %2 == 1) || (td[53].value %2 == 1 && td[56].value %2 == 1 && td[59].value %2 == 1) || (td[51].value %2 == 1 && td[55].value %2 == 1 && td[59].value %2 == 1) || (td[53].value %2 == 1 && td[55].value %2 == 1 && td[57].value %2 == 1)){
        if(f==0){img6.src = 'zero.jpg'
    f++;
    td[50].value=1}
    } if((td[61].value %2 == 0 && td[62].value %2 == 0 && td[63].value %2 == 0) || (td[66].value %2 == 0 && td[64].value %2 == 0 && td[65].value %2 == 0) || (td[69].value %2 == 0 && td[67].value %2 == 0 && td[68].value %2 == 0) || (td[61].value %2 == 0 && td[64].value %2 == 0 && td[67].value %2 == 0) || (td[62].value %2 == 0 && td[65].value %2 == 0 && td[68].value %2 == 0) || (td[63].value %2 == 0 && td[66].value %2 == 0 && td[69].value %2 == 0) || (td[61].value %2 == 0 && td[65].value %2 == 0 && td[69].value %2 == 0) || (td[63].value %2 == 0 && td[65].value %2 == 0 && td[67].value %2 == 0)){
        if(g==0){img7.src='cross.jpg'
        g++;
        td[60].value=0}
    } if((td[61].value %2 == 1 && td[62].value %2 == 1 && td[63].value %2 == 1) || (td[66].value %2 == 1 && td[64].value %2 == 1 && td[65].value %2 == 1) || (td[69].value %2 == 1 && td[67].value %2 == 1 && td[68].value %2 == 1) || (td[61].value %2 == 1 && td[64].value %2 == 1 && td[67].value %2 == 1) || (td[62].value %2 == 1 && td[65].value %2 == 1 && td[68].value %2 == 1) || (td[63].value %2 == 1 && td[66].value %2 == 1 && td[69].value %2 == 1) || (td[61].value %2 == 1 && td[65].value %2 == 1 && td[69].value %2 == 1) || (td[63].value %2 == 1 && td[65].value %2 == 1 && td[67].value %2 == 1)){
        if(g==0){img7.src = 'zero.jpg'
    g++;
    td[60].value=1}
    } if((td[71].value %2 == 0 && td[72].value %2 == 0 && td[73].value %2 == 0) || (td[76].value %2 == 0 && td[74].value %2 == 0 && td[75].value %2 == 0) || (td[79].value %2 == 0 && td[77].value %2 == 0 && td[78].value %2 == 0) || (td[71].value %2 == 0 && td[74].value %2 == 0 && td[77].value %2 == 0) || (td[72].value %2 == 0 && td[75].value %2 == 0 && td[78].value %2 == 0) || (td[73].value %2 == 0 && td[76].value %2 == 0 && td[79].value %2 == 0) || (td[71].value %2 == 0 && td[75].value %2 == 0 && td[79].value %2 == 0) || (td[73].value %2 == 0 && td[75].value %2 == 0 && td[77].value %2 == 0)){
        if(h==0){img8.src='cross.jpg'
        h++;
        td[70].value=0}
    } if((td[71].value %2 == 1 && td[72].value %2 == 1 && td[73].value %2 == 1) || (td[76].value %2 == 1 && td[74].value %2 == 1 && td[75].value %2 == 1) || (td[79].value %2 == 1 && td[77].value %2 == 1 && td[78].value %2 == 1) || (td[71].value %2 == 1 && td[74].value %2 == 1 && td[77].value %2 == 1) || (td[72].value %2 == 1 && td[75].value %2 == 1 && td[78].value %2 == 1) || (td[73].value %2 == 1 && td[76].value %2 == 1 && td[79].value %2 == 1) || (td[71].value %2 == 1 && td[75].value %2 == 1 && td[79].value %2 == 1) || (td[73].value %2 == 1 && td[75].value %2 == 1 && td[77].value %2 == 1)){
        if(h==0){img8.src = 'zero.jpg'
    h++;
    td[70].value=1}
    } if((td[81].value %2 == 0 && td[82].value %2 == 0 && td[83].value %2 == 0) || (td[86].value %2 == 0 && td[84].value %2 == 0 && td[85].value %2 == 0) || (td[89].value %2 == 0 && td[87].value %2 == 0 && td[88].value %2 == 0) || (td[81].value %2 == 0 && td[84].value %2 == 0 && td[87].value %2 == 0) || (td[82].value %2 == 0 && td[85].value %2 == 0 && td[88].value %2 == 0) || (td[83].value %2 == 0 && td[86].value %2 == 0 && td[89].value %2 == 0) || (td[81].value %2 == 0 && td[85].value %2 == 0 && td[89].value %2 == 0) || (td[83].value %2 == 0 && td[85].value %2 == 0 && td[87].value %2 == 0)){
        if(i==0){img9.src='cross.jpg'
        i++;
        td[80].value=0}
    } if((td[81].value %2 == 1 && td[82].value %2 == 1 && td[83].value %2 == 1) || (td[86].value %2 == 1 && td[84].value %2 == 1 && td[85].value %2 == 1) || (td[89].value %2 == 1 && td[87].value %2 == 1 && td[88].value %2 == 1) || (td[81].value %2 == 1 && td[84].value %2 == 1 && td[87].value %2 == 1) || (td[82].value %2 == 1 && td[85].value %2 == 1 && td[88].value %2 == 1) || (td[83].value %2 == 1 && td[86].value %2 == 1 && td[89].value %2 == 1) || (td[81].value %2 == 1 && td[85].value %2 == 1 && td[89].value %2 == 1) || (td[83].value %2 == 1 && td[85].value %2 == 1 && td[87].value %2 == 1)){
        if(i==0){img9.src = 'zero.jpg'
    i++;
    td[80].value=1}
    } if ((td[0].value %2 == 0 && td[10].value %2 == 0 && td[20].value %2 == 0) || (td[30].value %2 == 0 && td[40].value %2 == 0 && td[50].value %2 == 0) || (td[60].value %2 == 0 && td[70].value %2 == 0 && td[80].value %2 == 0) || (td[0].value %2 == 0 && td[30].value %2 == 0 && td[60].value %2 == 0) || (td[10].value %2 == 0 && td[40].value %2 == 0 && td[70].value %2 == 0) || (td[20].value %2 == 0 && td[50].value %2 == 0 && td[80].value %2 == 0) || (td[0].value %2 == 0 && td[40].value %2 == 0 && td[80].value %2 == 0) || (td[20].value %2 == 0 && td[40].value %2 == 0 && td[60].value %2 == 0)){
        setTimeout(function(){alert('player 1 won')},400);
    } if ((td[0].value %2 == 1 && td[10].value %2 == 1 && td[20].value %2 == 1) || (td[30].value %2 == 1 && td[40].value %2 == 1 && td[50].value %2 == 1) || (td[60].value %2 == 1 && td[70].value %2 == 1 && td[80].value %2 == 1) || (td[0].value %2 == 1 && td[30].value %2 == 1 && td[60].value %2 == 1) || (td[10].value %2 == 1 && td[40].value %2 == 1 && td[70].value %2 == 1) || (td[20].value %2 == 1 && td[50].value %2 == 1 && td[80].value %2 == 1) || (td[0].value %2 == 1 && td[40].value %2 == 1 && td[80].value %2 == 1) || (td[20].value %2 == 1 && td[40].value %2 == 1 && td[60].value %2 == 1)){
        setTimeout(function(){alert('player 2 won')},400);
    } else{
        if(i==81){
            setTimeout(function(){alert("it's a draw")})
        }
    }
}

function changeBGC(j){
    td[0].style.backgroundColor= 'rgb(255, 227, 227)'
    td[10].style.backgroundColor= 'rgb(255, 227, 227)'
    td[20].style.backgroundColor= 'rgb(255, 227, 227)'
    td[30].style.backgroundColor= 'rgb(255, 227, 227)'
    td[40].style.backgroundColor= 'rgb(255, 227, 227)'
    td[50].style.backgroundColor= 'rgb(255, 227, 227)'
    td[60].style.backgroundColor= 'rgb(255, 227, 227)'
    td[70].style.backgroundColor= 'rgb(255, 227, 227)'
    td[80].style.backgroundColor= 'rgb(255, 227, 227)'
    td[j].style.backgroundColor = 'rgb(250, 145, 145)'
}
reset.addEventListener('click',function (){
    location.reload();
})
