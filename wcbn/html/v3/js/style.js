// JavaScript Document


$(window).ready(function(e) {


	$(".search-common").hover(function () {
		$(".search-common > .navbar-form").css("display",'inline-block');
	},function () {
		$(".search-common > .navbar-form").css("display",'none');
	});

	$(".top").click(function () {
		$("html").animate({scrollTop:'0px'},500);
		$("body").animate({scrollTop:'0px'},500);
		$(".top").css('display','none');
	});
	$(window).scroll(function() {
		$(".top").hide();
		var scrollTop = $(this).scrollTop();
		var windowH = $(window).height();
		if($(this).scrollTop()){
			$(".top").show();
		}else if(scrollTop < windowH){
			$(".top").hide();
		}
	});


	$("#phone").mouseenter(function () {
		$(".phone>div").css("display",'inline-block');
	});
	$(".phone").mouseleave(function () {
		$(".phone>div").css("display",'none');
	});



//导航栏排他事件
	$(".nav-pills li").click(function(e) {
        $(this).addClass("active");
		$(this).siblings().removeClass("active");
		$(this).parent("ul").siblings("ul").children("li").removeClass("active");
    });


	
}); 


		
