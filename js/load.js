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