window.onload = function(){
    document.getElementById("user1").addEventListener("mouseenter",function(e){
        Shaking(e.target);
    })
    document.getElementById("user2").addEventListener("mouseenter",function(e){
        Shaking(e.target);
    })
    document.getElementById("user3").addEventListener("mouseenter",function(e){
        Shaking(e.target);
    })
}
function Shaking(element) {
    const maxAngle = 10; // 震动偏移角度
    const interval = 30; // 震动快慢
    const quarterCycle = 4; // 一次完整来回震动的四分之一周期
    let curAngle = 0;
    let direction = 1;
    const timer = setInterval(function(){
        if (direction > 0) {
            curAngle++;
            if (curAngle === maxAngle) {
                direction = -1;
            }
        } else {
            curAngle--;
            if (curAngle === -maxAngle) {
                direction = 1;
            }
        }
        element.style.transform = 'rotate(' + curAngle + 'deg)';
    }, interval)
    setTimeout(function(){
        clearInterval(timer);
    }, maxAngle * interval * quarterCycle);
}

