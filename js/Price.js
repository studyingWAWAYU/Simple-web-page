function buying(){
    var username = sessionStorage.getItem("username");
    console.log(username);
    if(username==null){
        alert("您还没有登录！");
        window.location.href="../html/Login.html";
    }else{
        var img = document.getElementById("PriceImg");
        var PriceClose=document.getElementById("PriceClose");
        img.style.display = "block";
        PriceClose.style.display = "block";
    }
}
function Priceclose(){
    var img = document.getElementById("PriceImg");
    var PriceClose=document.getElementById("PriceClose");
    img.style.display = "none";
    PriceClose.style.display = "none";
}