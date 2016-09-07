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
    window.location.reload();
})
$(".greet_box").css({"max-height":width});
var width=$(".name").width();
$(".name").css({height:width});
$(".name").css({"line-height":width-13+"px"});
$(".name_greet").css({"line-height":$('.name_greet').width()/6+"px"});
var baomingh=$(".baoming").css('width');
$(".baoming").css({height:baomingh,'line-height':baomingh});
/**/
$(".ft_center li>img").each(function(index,obj){
    $(this).on("mouseover click",function(){
        $(this).parent().find(".zhezhao").show()
    })
    $(this).on("mouseout",function(){
        $(this).parent().find(".zhezhao").hide()
    })
})

$(".submit").click(function(){
    var flag=true;
    $("input").each(function(index,obj){
        if($(this).val()==""){
            flag=false;
            $(".alert").html('有选项未填！');
            return false;
        }else{
            if(index==2&&!(/^1[34578][0-9]{9}$/g.test($(this).val()))){
                flag=false;
                $(".alert").html('手机号错误！');
                return false;
            }
            if(index==3&&!(/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/g.test($(this).val()))){
                flag=false;
                $(".alert").html('邮箱错误！');
                return false;
            }
        }
        flag=true;
    })
    if(flag){
        $(".alert").html('');
        $.ajax({
            url:'/save.php',
            type:'post',
            data:{name:$("input[id='name']").val(),gs:$("input[id='gs']").val(),tel:$("input[id='tel']").val(),email:$("input[id='email']").val()},
            success:function(data){
                if(data=='true'){
                    $(".alert").html('提交成功！')
                }else{
                    $(".alert").html('提交失败！')
                }
            }
        })
    }
})


$(function(){
    /*轮播*/
    var bannerbox=$(".bannerbox");
    var height=bannerbox.find("img").css("height");
    var width=bannerbox.find("img").css("width");
    bannerbox.css({height:height});
    var imglis=$(".bannerbox>ul>li");
    var length=imglis.length;
    var index=0,now=1;
    /*标注*/
    var marks=$(".marks>li");
    var t=setInterval(move,8000);
    function move(){
        if(now>=length){
            now=0;
        }
        imglis.eq(index).animate({"right":"100%"},500,function(){
            $(this).css({right:"-100%"})
        });
        marks.removeClass("hot").eq(now).addClass("hot");
        imglis.eq(now).animate({"right":0},500,function(){
            index=now;
            now++;
        });
    }
    marks.each(function(i,obj){
        $(this).click(function(){
            clearInterval(t);
            imglis.finish();
            now=i;
            marks.removeClass("hot").eq(now).addClass("hot");
            imglis.eq(index).animate({"right":"100%"},500,function(){
                $(this).css({right:"-100%"})
            });
            imglis.eq(now).animate({"right":0},500,function(){
                index=now;
                now++;
                t=setInterval(move,8000);
            });
        })
    })
    /*视频*/
    var start=$(".vjs-big-play-button");
    $(".video_box").on("click",function(){
        var btn=$(".video-js");
        setTimeout(function(){
            if(btn.hasClass("vjs-paused")){
                start.css({display:"block"}).on("click",function(){
                    $(this).css({display:"none"});
                });
            }else if(btn.hasClass("vjs-playing")){
                start.css({display:"none"});
            }
        },0)
    })
})
