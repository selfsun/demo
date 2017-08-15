// JavaScript Document


$(window).ready(function(e) {
  	$('.carousel').carousel({
	  interval: 1800
	});
	
//
$(".close").click(function(e) {
        $(".notice").css("display","none");

    });



	
// 滚动事件


//

$(".top_icon").hide();
$(window).scroll(function(e) {
	if($(window).scrollTop() >= 500){
		$(".top_icon").show();
	}else{
		$(".top_icon").hide();
	}
});


	
// 滚动事件



		/*$("#scrollMenu2").marquee({
		direction: "up", distance: 26, time: 2, btnGo: {
			up: '#left2', down: '#right2'
		}
		});*/


			
	
	
//悬浮窗click事件	
	$(".one").click(function(){
		window.scrollTo(0,$('#one').offset().top-142);
	});
	$(".two").click(function(){
		window.scrollTo(0,$('#two').offset().top-142);
	});
	
	$(".three").click(function(){
		window.scrollTo(0,$('#three').offset().top-142);
	});

	$(".four").click(function(){
		window.scrollTo(0,$('#four').offset().top-142);
	});

	$(".five").click(function(){
		window.scrollTo(0,$('#five').offset().top-142);
	});

	$(".six").click(function(){
		window.scrollTo(0,$('#six').offset().top-142);
	});

	$(".seven").click(function(){
		window.scrollTo(0,$('#seven').offset().top-142);
	});

	$(".eight").click(function(){
		window.scrollTo(0,0);
	});

//导航栏排他事件
	$(".nav-pills li").click(function(e) {
        $(this).addClass("active");
		$(this).siblings().removeClass("active");
		$(this).parent("ul").siblings("ul").children("li").removeClass("active");
    });


	
}); 


		
