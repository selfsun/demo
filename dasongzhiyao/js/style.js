// JavaScript Document
$(".phone").hover(function(e) {
	$(".num").addClass("hid");
});
$(".fix").mouseleave(function(e) {
	$(".num").removeClass("hid");
});

$(".fix").hide();
$(window).scroll(function() {
	if($(window).scrollTop()<670){
		$(".fix").hide();
	}else{
		$(".fix").show();
	}
});

$(window).resize(function(){
	if($(window).width()<768){
		$('.btn-ds').show();

		$('.pinch-zoom').each(function () {
			new RTP.PinchZoom($(this), {});
		});
	}else{
		$('.btn-ds').hide();
	}
	$(".top").click(function(){
		$(document.body).animate({scrollTop: '0px'}, 400);
	});

});


function resize() {
	var windowWidth = $(window).width();
	var isSmallScreen = windowWidth < 768;
	$('.itemImage').each(function(i, itemImage) {
		var $itemImage = $(itemImage);
		// var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
		var imgSrc =
			isSmallScreen ? $itemImage.data('image-xs') : $itemImage.data('image-lg');
		$itemImage.css('backgroundImage', 'url("' + imgSrc + '")');
		if (isSmallScreen) {
			$itemImage.html('<img src="' + imgSrc + '" alt="" />');
		} else {
			$itemImage.empty();
		}
	});
}
$(window).on('resize', resize).trigger('resize');

(function(window) {
	var theUA = window.navigator.userAgent.toLowerCase();
	if ((theUA.match(/msie\s\d+/) && theUA.match(/msie\s\d+/)[0]) || (theUA.match(/trident\s?\d+/) && theUA.match(/trident\s?\d+/)[0])) {
		var ieVersion = theUA.match(/msie\s\d+/)[0].match(/\d+/)[0] || theUA.match(/trident\s?\d+/)[0];
		if (ieVersion < 9) {
			var str = "你的浏览器版本太旧了\n已经和时代脱轨了 :(";
			var str2 = "推荐使用:<a href='https://www.baidu.com/s?ie=UTF-8&wd=%E8%B0%B7%E6%AD%8C%E6%B5%8F%E8%A7%88%E5%99%A8' target='_blank' style='color:#cc0'>谷歌</a>,"
				+ "<a href='https://www.baidu.com/s?ie=UTF-8&wd=%E7%81%AB%E7%8B%90%E6%B5%8F%E8%A7%88%E5%99%A8' target='_blank' style='color:#cc0'>火狐</a>,"
				+ "<a href='https://www.baidu.com/s?ie=UTF-8&wd=%E7%8C%8E%E8%B1%B9%E6%B5%8F%E8%A7%88%E5%99%A8' target='_blank' style='color:#cc0'>猎豹</a>,其他双核急速模式";
			document.writeln("<pre style='text-align:center;color:#fff;background-color:#0cc; height:100%;border:0;position:fixed;top:0;left:0;width:100%;z-index:1234'>" +
				"<h2 style='padding-top:200px;margin:0'><strong>" + str + "<br/></strong></h2><p>" +
				str2 + "</p><h2 style='margin:0'><strong>如果你的使用的是双核浏览器,请切换到极速模式访问<br/></strong></h2></pre>");
			document.execCommand("Stop");
		}
	}
})(window);