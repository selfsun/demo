/**
 * Created by Administrator on 2017/5/5.
 */
//$(function () {
//
//})(jquery);
$(function () {
    var theUA = window.navigator.userAgent.toLowerCase();
    if ((theUA.match(/msie\s\d+/) && theUA.match(/msie\s\d+/)[0]) || (theUA.match(/trident\s?\d+/) && theUA.match(/trident\s?\d+/)[0])) {
        var ieVersion = theUA.match(/msie\s\d+/)[0].match(/\d+/)[0] || theUA.match(/trident\s?\d+/)[0];
        if (ieVersion < 8) {
            var str = "\u4f60\u7684\u6d4f\u89c8\u5668\u7248\u672c\u592a\u65e7\u4e86\n\u5df2\u7ecf\u548c\u65f6\u4ee3\u8131\u8f68\u4e86\uff1a(";
            var str2 = "\u63a8\u8350\u4f7f\u7528:<a href='https://www.baidu.com/s?ie=UTF-8&wd=%E8%B0%B7%E6%AD%8C%E6%B5%8F%E8%A7%88%E5%99%A8' target='_blank' style='color:#cc0'>\u8c37\u6b4c</a>,"
                + "<a href='https://www.baidu.com/s?ie=UTF-8&wd=%E7%81%AB%E7%8B%90%E6%B5%8F%E8%A7%88%E5%99%A8' target='_blank' style='color:#cc0'>\u706b\u72d0</a>,"
                + "<a href='https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=360%E6%B5%8F%E8%A7%88%E5%99%A8&oq=%25E7%258C%258E%25E8%25B1%25B9%25E6%25B5%258F%25E8%25A7%2588%25E5%2599%25A8&rsv_pq=bd11505d00004da1&rsv_t=80d78%2Bgxa69XY4Sm3MuobgmvdVm683gUPDiz5GF9KFwhTG%2BF1tZDbuXFVDA&rqlang=cn&rsv_enter=1&rsv_sug3=4&rsv_sug1=3&rsv_sug7=100&rsv_sug2=0&inputT=460&rsv_sug4=1972' target='_blank' style='color:#cc0'>360\u6d4f\u89c8\u5668</a>,\u5176\u4ed6\u53cc\u6838\u6025\u901f\u6a21\u5f0f";
            document.writeln("<pre style='text-align:center;color:#fff;background-color:#0cc; height:100%;border:0;position:fixed;top:0;left:0;width:100%;z-index:1234'>" +
                "<h2 style='padding-top:200px;margin:0'><strong>" + str + "<br/></strong></h2><p>" +
                str2 + "</p><h2 style='margin:0'><strong>\u5982\u679c\u4f60\u7684\u4f7f\u7528\u7684\u662f\u53cc\u6838\u6d4f\u89c8\u5668,\u8bf7\u5207\u6362\u5230\u6781\u901f\u6a21\u5f0f\u8bbf\u95ee<br/></strong></h2></pre>");
            document.execCommand("Stop");
        }
    }
    $(".phone-right").mouseenter(function () {
        $(".phone-left").css('display', 'block');
    });
    $(".phone").mouseleave(function () {
        $(".phone-left").css('display', 'none');
    });

    $(".product-content").mouseenter(function(){
        $("#leftArr").show();
        $("#rightArr").show();
    });
    $(".product-content").mouseleave(function(){
        $("#leftArr").hide();
        $("#rightArr").hide();
    });
    function resize() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $('#same > .item').each(function(i, item) {
            var $item = $(item);
            // var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
            var imgSrc =
                isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
            $item.css('backgroundImage', 'url("' + imgSrc + '")');
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '" alt="" />');
            } else {
                $item.empty();
            }
        });
    }
    $(window).on('resize', resize).trigger('resize');



    $(".top").click(function(){
        $(document.body).animate({scrollTop: '0px'}, 400);
        $("html").animate({scrollTop: '0px'}, 400);
    });

    if($(window).width() < 768){
        $(window).scroll(function() {//滚屏
            $(".totop").hide();
            var scrollTop = $(this).scrollTop();//滚动高度
            var windowH = $(window).height();//页面高度
            if($(this).scrollTop()){
                $(".totop").show();
            }else if(scrollTop < windowH){
                $(".totop").hide();
            }
        });
        //$(".top").hide();
        $(".totop").click(function () {
            $(document.body).animate({scrollTop: '0px'}, 400);
            $("html").animate({scrollTop: '0px'}, 400);
            $(".totop").css('display','none');
        });
        $("#same>.item>img").css({"width":"100%","height":"auto"});
    }else{
        $("#same>.item").css({"width":"100%","height":"300px"});
    }
});