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





//导航栏排他事件
	$(".nav-pills li").click(function(e) {
        $(this).addClass("active");
		$(this).siblings().removeClass("active");
		$(this).parent("ul").siblings("ul").children("li").removeClass("active");
    });


	
}); 


		
