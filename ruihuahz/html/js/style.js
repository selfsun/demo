//导航栏固定事件
$(window).ready(function(e) {
	var navH = $(".fixed-header").offset().top;

	if($(window).width()<=768){
		$(".fixed-header").addClass("navbar-fixed-top");	
	}
	
	$(window).scroll(function(e) {
		var scroH = $(this).scrollTop();
		if(scroH >navH){
	
			$(".fixed-header").addClass("navbar-fixed-top");
			$("nav.navbar .nav_left").css({"margin-left":"0px"},{"margin-right":"0px"});
			$("nav.navbar .navbar-right").css("margin-right","0px");
			
		}else if(scroH < navH){
			$(".fixed-header").removeClass("navbar-fixed-top");
			$("nav.navbar .nav_left").css("margin-left","-15px");
			$("nav.navbar .navbar-right").css("margin-right","-15px");
			if($(window).width()<768){
				$("nav.navbar .nav_left").css("margin-left","0");
				$("nav.navbar .navbar-right").css("margin-right","0");
				$(".fixed-header").addClass("navbar-fixed-top");
			}
			
		}else{
			$(".fixed-header").removeClass("navbar-fixed-top");
			$("nav.navbar .nav_left").css("margin-left","-15px");
			$("nav.navbar .navbar-right").css("margin-right","-15px");
			if($(window).width()<768){
				$("nav.navbar .nav_left").css("margin-left","0");
				$("nav.navbar .navbar-right").css("margin-right","0");
				$(".fixed-header").addClass("navbar-fixed-top");
			}
		}
	});	
	
	//导航栏排他事件
	$(".nav-pills li").click(function(e) {
        $(this).addClass("active");
		$(this).siblings().removeClass("active");
		$(this).parent("ul").siblings("ul").children("li").removeClass("active");
    });
	//返回顶部
	$(".top_icon").hide();
	$(window).scroll(function(e) {
		if($(window).scrollTop() >= 200){
			$(".top_icon").show();
		}else{
			$(".top_icon").hide();
		}
	});
	$(".nav-pills > li.dropdown ").hover(function(e) {
		$(this).addClass("open");
		$(".header-home .navbar-nav > li > .dropdown-menu").show();
	});
	$(".nav-pills > li.dropdown ").mouseleave(function(e) {
        $(this).removeClass("open");
    $(".header-home .navbar-nav > li > .dropdown-menu").hide();
    });
	

});

