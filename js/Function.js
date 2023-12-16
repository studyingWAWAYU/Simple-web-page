
var index=1;
function lunbo(){
    var obj = document.getElementById("alternatePlay");
    index++;
    if(index>8){
        index=1;
        obj.src="../img/functions/pic1.png";
    }else if(index<1) {
        index = 8;
        obj.src = "../img/functions/pic8.png";
    }else {
        obj.src = "../img/functions/pic" + index + ".png";
    }
}
window.onload=function(){
    t = setInterval("lunbo()",1200);
}
function stopAndContinue(){
    if(t){
        clearInterval(t);
        t = null;
    }else{
        t = setInterval("lunbo()",1200);
    }
}
function preimg(){
    index-=2;
    lunbo();
}
function nextimg(){
    lunbo();
}

/*三个圆的运动*/
function move(){
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    var text3 = document.getElementById("text3");

    var templeft = text1.style.left;
    var tempbottom = text1.style.bottom;

    text1.style.left = text3.style.left;
    text1.style.bottom = text3.style.bottom;

    text3.style.left = text2.style.left;
    text3.style.bottom = text2.style.bottom;

    text2.style.left = templeft;
    text2.style.bottom = tempbottom;
}

