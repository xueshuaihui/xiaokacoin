/*计算rem*/
var width=$("body").width();
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 10 * (clientWidth / 1920) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

$(window).resize(function(){
    $.getScript($('script[src*="/index.js"]').attr('src'));
})
$(".greet_box").css({"max-height":width});
var width=$(".name").width();
$(".name").css({height:width});
$(".name").css({"line-height":width-13+"px"});
$(".name_greet").css({"line-height":$('.name_greet').width()/6+"px"});
var baomingh=$(".baoming").css('width');
$(".baoming").css({height:baomingh,'line-height':baomingh});
$(function(){
    var bannerbox=$(".bannerbox");
    var height=bannerbox.find("img").css("height");
    var width=bannerbox.find("img").css("width");
    bannerbox.css({height:height});
})
