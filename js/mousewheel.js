jQuery.fn.extend({
    mouseWheel:function(upfun,downfun){
        this.each(function(index,obj){
            /*触发鼠标滚轮事件  事件添加处理函数*/
            if(obj.attachEvent){
                obj.attachEvent("onmousewheel",scrollFn);/* IE、 opera*/
            }else if(obj.addEventListener){
                obj.addEventListener("mousewheel",scrollFn,false);
                /*chrome,safari -webkitdocument.*/
                obj.addEventListener("DOMMouseScroll",scrollFn,false);
                /*firefox -moz-*/
            }
            /*兼容*/
            /*事件处理函数*/
            function scrollFn(e){
                var ev=e||window.event;
                if(ev.detail==-3||ev.wheelDelta==120){
                    if(upfun){
                        upfun.call(obj);
                    }
                }
                /*向上滚动时执行*/
                /*向下滚动时执行*/
                if(ev.detail==3||ev.wheelDelta==-120){
                    if(downfun){
                        downfun.call(obj);
                    }
                }

                if (ev.preventDefault )
                    ev.preventDefault(); //阻止默认浏览器动作(W3C)
                else
                    ev.returnValue = false;//IE中阻止函数器默认动作的方式
                //阻止浏览器的默认     滑动选择文本
            }
        })


    }
})
/*鼠标滚轮时间*/
$(function(){
    var height=$(window).height();
    window.onresize=function(){
        height=$(window).height();
    }
/*窗口高*/
    var n=0;
    var top;
    var flag=true;
    $(window).mouseWheel(function up(){
    },function down(){
        if(flag){
            flag=false;
            n++;
            top=n*height;
            console.log($("body").scroll());
        }

    });
/*滚轮*/
})