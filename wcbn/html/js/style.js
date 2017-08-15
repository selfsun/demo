// JavaScript Document

$(document).ready(function(e) {

//

addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } 
//


         $("#sorllMenu").marquee({ isAuto: true, distance: 263, time: 3, btnGo: { left: '#right', right: '#left' }, init: null });
		$("#sorllMenu2").marquee({
			direction: "up", distance: 27, time: 2, btnGo: {
				up: '#left2', down: '#right2'
			}
		});


		
		//
		new WOW().init();
		//
		
	$(".phone_nav .menu").click(function(){
		$(".top-nav ul").slideToggle(500, function(){
		});
	});
//
			$(".top-nav li a").click(function(){
				$(this).parent().addClass("active");
				$(this).parent().siblings().removeClass("active");
			});
			
			$(".navbar-nav li").click(function(e) {
            $(this).addClass("active");
			$(this).parent("ul").siblings().children("li").removeClass("active");});
			
			
			
			
			var navH = $(".fixed-header").offset().top;

			$(window).scroll(function(){
				var scroH = $(this).scrollTop();
				if(scroH >navH){
					$(".fixed-header").addClass("navbar-fixed-top");
				}else if(scroH < navH){
					$(".fixed-header").removeClass("navbar-fixed-top");
				}else{
					$(".fixed-header").removeClass("navbar-fixed-top");
				}
			});
			var w_width = $(window).width()
			if(w_width == 768){
				
				$(".navbar-collapse").css({"background-color":"#21781c"},{"color":"#fff"})
				
				}
			 
 });
			 
			 
		
		
