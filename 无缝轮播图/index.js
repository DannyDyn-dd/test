var container = document.getElementsByClassName('container')[0],
    dots = document.getElementsByClassName('dots')[0],
    dotli = dots.children,
    len = dotli.length,
    ltarrow = document.getElementsByClassName('lt-arrow')[0],
    rtarrow = document.getElementsByClassName('rt-arrow')[0];

    
// 圆点背景颜色的变化函数
function dotliChange() {
    for(var i = 0; i < len; i ++) {
        if(dotli[i].className.slice(-4) == " dot") {
            dotli[i].className = dotli[i].className.slice(0,5)
        }
    }
    if(parseInt(container.style.marginLeft) == 0) {
        dotli[0].className += " dot";
    } else if(parseInt(container.style.marginLeft) == -600) {
        dotli[1].className += " dot";
    } else if(parseInt(container.style.marginLeft) == -1200) {
        dotli[2].className += " dot";
    }
}

// 计时，每2000毫秒播放下一张图片
var timer = setInterval(function () {
    container.style.marginLeft = parseInt(container.style.marginLeft) - 600 + "px";
    if(parseInt(container.style.marginLeft) == -1800) {
        container.style.marginLeft = 0;
    }
    dotliChange(); // 调用圆点背景颜色的变化函数
}, 2000)

// 赋予左右箭头点击事件
ltarrow.onclick = function () {
    // clearInterval(timer);
    container.style.marginLeft = parseInt(container.style.marginLeft) + 600 + "px";
    if(parseInt(container.style.marginLeft) > 0) {
        container.style.marginLeft = parseInt(container.style.marginLeft) - 1800 + "px";
    }
    dotliChange(); // 调用圆点背景颜色的变化函数
}
rtarrow.onclick = function () {
    container.style.marginLeft = parseInt(container.style.marginLeft) - 600 + "px";
    if(parseInt(container.style.marginLeft) == -1800) {
        container.style.marginLeft = 0;
    }
    dotliChange(); // 调用圆点背景颜色的变化函数
}

// 点击圆点切换图片事件
for(var i = 0; i < len; i ++) {
    (function (i) {
        dotli[i].onclick = function () {
            if(i == 0) {
                container.style.marginLeft = 0;
            } else if(i == 1) {
                container.style.marginLeft = "-600px";
            } else if(i == 2) {
                container.style.marginLeft = "-1200px";
            }
            dotliChange(); // 调用圆点背景颜色的变化函数
        }
    }(i))
}