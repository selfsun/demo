	$(function(){
	
		$(".tab_wx").click(function(e){
			$(this).parent().addClass("selected");
			$(this).parent().siblings().removeClass("selected");
			num = $(this).index();
		});
	
		
	$("#menu_0").click(function(e) {
	    $("#menu_0 .js_l2TitleBox").css('display','block');
		$("#menu_0").siblings().children("div").css('display','none');
	});	
	$("#menu_1").click(function(e) {
	    $("#menu_1 .js_l2TitleBox").css('display','block');
		$("#menu_1").siblings().children("div").css('display','none');
	});	
	$("#menu_2").click(function(e) {
	    $("#menu_2 .js_l2TitleBox").css('display','block');
		$("#menu_2").siblings().children("div").css('display','none');
	});	

	<!--var obj = $('.sub_pre_menu_list>li');-->
		
	$("#js_addMenuBox00").click(function(){
	var myTag = $('<li><a href="javascript:void(0);"><span class="sub_pre_menu_inner">子菜单名称</span></a></li>');
		if( $("#menu_0>div>ul>li").length < 5){

			$("#js_addMenuBox00").before(myTag);
			$("#menu_0>div>ul>li").length++;
		}else if( $("#menu_0>div>ul>li").length == 5){
			$("#js_addMenuBox00").before(myTag);
			$("#js_addMenuBox00").css('display','none');
		}
	
	});
	
		$("#js_addMenuBox01").click(function(){
		var myTag = $('<li><a href="javascript:void(0);"><span class="sub_pre_menu_inner">子菜单名称</span></a></li>');
			if( $("#menu_1>div>ul>li").length < 5){
				$("#js_addMenuBox01").before(myTag);
			}else if( $("#menu_1>div>ul>li").length == 5){
				$("#js_addMenuBox01").before(myTag);
				$("#js_addMenuBox01").css('display','none');
			}
		
		});				

		$("#js_addMenuBox02").click(function(){
		var myTag = $('<li><a href="javascript:void(0);"><span class="sub_pre_menu_inner">子菜单名称</span></a></li>');
		if( $("#menu_2>div>ul>li").length < 5){
			$("#js_addMenuBox02").before(myTag);
		}else if( $("#menu_2>div>ul>li").length == 5){
			$("#js_addMenuBox02").before(myTag);
			$("#js_addMenuBox02").css('display','none');
		}
		
		});				
		
		
		//语音、图文切换
		$(".tab_t").click(function(e) {
            $(".tab_panel").children().eq(0).css('display','block');
            $(".tab_panel").children().eq(0).siblings().css('display','none');
        });
		
		
		
		$(".tab_img").click(function(e) {
            $(".tab_panel").children().eq(1).css('display','block');
            $(".tab_panel").children().eq(1).siblings().css('display','none');
        });
		$(".tab_audio").click(function(e) {
            $(".tab_panel").children().eq(2).css('display','block');
            $(".tab_panel").children().eq(2).siblings().css('display','none');
        });
		$(".tab_video").click(function(e) {
            $(".tab_panel").children().eq(3).css('display','block');
            $(".tab_panel").children().eq(3).siblings().css('display','none');
        });
		
		//切换跳转链接
		$(".frm_controls").children("label").eq(0).click(function(e) {
            $("#edit").css('display','block');
			$("#url").css('display','none');
        });
		$(".frm_controls").children("label").eq(1).click(function(e) {
            $("#edit").css('display','none');
			$("#url").css('display','block');
        });

		$(".mod li").click(function(){
			
			$(this).children(".edit_mask").css('display','block');
			$(this).siblings().children(".edit_mask").css('display','none');
			$(this).parent().siblings().children(".mod li").children(".edit_mask").css('display','none');
		});
		

//


	$(".phone_nav .menu").click(function(){
		$(".top-nav ul").slideToggle(500, function(){
		});
	});
//
		$(document).ready(function(){
			$(".top-nav li a").click(function(){
				$(this).parent().addClass("active");
				$(this).parent().siblings().removeClass("active");
			});
		});
//
		$(document).ready(function() {
			 var navoffeset=$(".header-home").offset().top;
			 $(window).scroll(function(){
				var scrollpos=$(window).scrollTop(); 
				if(scrollpos >navoffeset){
					$(".header-home").addClass("fixed");
				}else{
					$(".header-home").removeClass("fixed");
				}
			 });
			 
		});
			$("#service_qq").hover(function(e){
				$(".qq_num").removeClass("hidden");
			});
			$("#service_qq").mouseleave(function(e){
				$(".qq_num").addClass("hidden");
			});
		
			$("#service_phone").hover(function(e) {
				$(".phone_num").removeClass("hidden");
			});
			$("#service_phone").mouseleave(function(e) {
				$(".phone_num").addClass("hidden");
			});
			
			
			$("#service_search").hover(function(e) {
				$(".search_num").removeClass("hidden");
				
            });
			$("#service_search").mouseleave(function(e) {
				$(".search_num").addClass("hidden");
				
            });
			$("#J_rightBarMenuContainer a").mouseover(function(e){
				$(this).parent().addClass("active");
				$(this).parent().siblings().removeClass("active");
			});
			$("#J_rightBarMenuContainer a").mouseout(function(e) {
				$(this).parent().removeClass("active");
			});
			
		
/*		$("#service_qq").hover(function(e){
				$(".qq_num").removeClass("hidden");
			});
			$("#service_qq").mouseleave(function(e){
				$(".qq_num").addClass("hidden");
			});
		
			$("#service_phone").hover(function(e) {
				$(".phone_num").removeClass("hidden");
			});
			$("#service_phone").mouseleave(function(e) {
				$(".phone_num").addClass("hidden");
			});
			
			
			$("#service_search").hover(function(e) {
				$(".search_num").removeClass("hidden");
				
            });
			$("#service_search").mouseleave(function(e) {
				$(".search_num").addClass("hidden");
				
            });
			$("#J_rightBarMenuContainer a").mouseover(function(e){
				$(this).parent().addClass("active");
				$(this).parent().siblings().removeClass("active");
			});
			$("#J_rightBarMenuContainer a").mouseout(function(e) {
				$(this).parent().removeClass("active");
			});
*/		
		$(".js_l1Title").parent("a").click(function(e) {
			var a = $(".pre_menu_item").children("a").text();
            $(".global_mod").children("h4").text(a);
			$(".js_menu_name").val(a);
        });
	});
