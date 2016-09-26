var height=$(window).height();
function loadimg(parent){
    var img=parent.find("img");
    img.each(function(index,obj){
        var timg=$(this);
        if(timg.attr("src")==""){
            var src=timg.attr("img_src");
            timg.attr({src:src});
        }
    })
}
function imgload(parent){
    parent.each(function(index,obj){
        var that=$(this);
        if(that.offset().top<=height){
            loadimg(that)
        }
    })
}
var sd=$(".g-sd");
var full=$(".full_screen");
var ft=$(".g-ft");
var album=$(".album");
$("body").scroll(function(){
    imgload(sd);
    imgload(album);
    imgload(full);
    imgload(ft)
})
$(".ft_center li>img").each(function(index,obj){
    $(this).on("mouseover click",function(){
        $(this).parent().find(".zhezhao").show()
    })
    $(this).on("mouseout",function(){
        $(this).parent().find(".zhezhao").hide()
    })
})
$(function(){
    /*轮播*/
    var bannerbox=$(".bannerbox");
    var height=bannerbox.find("img").css("height");
    var width=bannerbox.find("img").css("width");
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
    var btn=$(".video-js");
    $(".video_box").on("click",function(){
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
    setInterval(function(){
        if(btn.hasClass("vjs-paused")){
            start.css({display:"block"}).on("click",function(){
                $(this).css({display:"none"});
            });
        }else if(btn.hasClass("vjs-playing")){
            start.css({display:"none"});
        }
    },1000)
})