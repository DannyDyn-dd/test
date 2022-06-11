// 短信登录/注册 和 扫码登录选择
var codepng2 = document.getElementsByClassName('codepng2')[0],
codepng1 = document.getElementsByClassName('codepng1')[0],
mid1 = document.getElementsByClassName('m-mid1')[0],
mid2 = document.getElementsByClassName('m-mid2')[0];
codepng2.addEventListener('click', function () {
// mid2.style.display = none;--> 不成立，因为行间没有display
mid2.className += ' none';
mid1.className = mid1.className.slice(0,-5);
}, false);
codepng1.addEventListener('click', function () {
mid1.className += ' none';
mid2.className = mid2.className.slice(0,-5);
if(midverify.className.slice(-5) != ' none') {
    midverify.className += ' none';
    midreg.className = midreg.className.slice(0,-5);
    if(reg1.className.slice(-9) != ' selected') {
        reg2.className = reg2.className.slice(0,-9);
        reg1.className += ' selected';
    }
}
}, false);

// 短信登录/注册 和 密码登录选择
var reg1 = document.getElementsByClassName('reg1')[0],
reg2 = document.getElementsByClassName('reg2')[0],
midreg = document.getElementsByClassName('mid-reg')[0],
midverify = document.getElementsByClassName('mid-verify')[0];
reg1.addEventListener('click', function () {
if(midverify.className.slice(-5) != ' none') {
    midverify.className += ' none';
    midreg.className = midreg.className.slice(0,-5);
    if(reg1.className.slice(-9) != ' selected') {
        reg2.className = reg2.className.slice(0,-9);
        reg1.className += ' selected';
    }
}
}, false);
reg2.addEventListener('click', function () {
if(midreg.className.slice(-5) != ' none') {
    midreg.className += ' none';
    midverify.className = midverify.className.slice(0,-5);
    if(reg2.className.slice(-9) != ' selected') {
        reg1.className = reg1.className.slice(0,-9);
        reg2.className += ' selected';
    }
}
}, false);

// 手机号地区选择
var choose = document.getElementsByClassName('choose')[0],
modalmo = document.getElementsByClassName('modal-mo')[0],
chooseend = document.getElementsByClassName('choose-end')[0],
liCol = document.getElementsByTagName('li'),
len = liCol.length;
choose.onclick = function () {
modalmo.className = modalmo.className.slice(0,-5);
}
chooseend.onclick = function () {
modalmo.className += ' none';
}
for(var i = 0; i < len; i ++) {
(function (i) {
    liCol[i].addEventListener('click', function () {
        modalmo.className += ' none';
        var len = liCol[i].innerText.length;
        for(var j = 0; j < len; j ++) {
            if(liCol[i].innerText[j] == '+') {
                choose.innerText = liCol[i].innerText.slice(-(len-j));
            }
        }
    }, false);
}(i))
}