
//$("document").ready(function(){
	var index = 0;
	var l = $(".skSliderimg ul li").size();
	function myshow(){
		$(".skSliderimg ul li").eq(index).find(".img1").animate({"left":"0px"},1000);
		$(".skSliderimg ul li").eq(index).find(".img2").animate({"left":"550px"},1000);
	}

	var timer = setInterval("change()",2000);
	function change(){
		index++;
		if(index == l){
			index = 0;
		}
		$(".skSliderimg ul li").eq(index).fadeIn(100).siblings().fadeOut(100);
		$(".skSlidernav ul li").eq(index).addClass("select").siblings().removeClass("select");
	
		myshow();
	
		$(".skSliderimg ul li").eq(index).siblings().find("img1").css("left","-20px");
		$(".skSliderimg ul li").eq(index).siblings().find(".img2").css("left","600px");
	
		var color=$(".skSliderimg ul li").eq(index).css("background-color");
	
		$(".contanier_banner").css("background-color",color);
	
	};
	
	$(".skSlidernav ul li").mouseover(function(){
		
		console.log("yes");
		clearInterval(timer);
		var navLis=$(this).index();
		console.log(navLis);
		$(".skSliderimg ul li").eq($(this).index()).fadeIn(100).siblings().fadeOut(100);
		$(".skSlidernav ul li").eq(navLis).addClass("select").siblings().removeClass("select");
		timer = setInterval("change()",2000);
		index=navLis;
		return false;
	})
	
	$(".skSliderimg").mouseover(function(){
		
		console.log("come baby");
		$(".skSlider_btnleft,.skSlider_btnright").css("display", "block");
		return false;
	})
	$(".skSliderimg").mouseout(function(){
		
		console.log("come baby");
		$(".skSlider_btnleft,.skSlider_btnright").css("display", "none");
		return false;
	})
	//上一页下一页 切换代码
	$(".skSlider_btnleft").mouseover(function(){
		
		$(".skSlider_btnleft").css("opacity", "1");
		
	})
	$(".skSlider_btnleft").mouseout(function(){
		
		$(".skSlider_btnleft").css("opacity", ".5");
		
	})
	$(".skSlider_btnright").mouseover(function(){
		
		$(".skSlider_btnright").css("opacity", "1");
		
	})
	$(".skSlider_btnright").mouseout(function(){
		
		$(".skSlider_btnright").css("opacity", ".5");
		
	})
	$(".skSlider_btnleft").click(function(){
		
		clearInterval(timer);
		$(".skSliderimg ul li").eq(index-1).fadeIn(100).siblings().fadeOut(100);
		$(".skSlidernav ul li").eq(index-1).addClass("select").siblings().removeClass("select");
		index-=2;
		if(index < 0){
			index = 4;
		}
		change();
		timer = setInterval("change()",2000);
	})
	$(".skSlider_btnright").click(function(){
		
		clearInterval(timer);
		$(".skSliderimg ul li").eq(index+1).fadeIn(100).siblings().fadeOut(100);
		$(".skSlidernav ul li").eq(index+1).addClass("select").siblings().removeClass("select");
		
		if(index == l){
			index = 0;
		}
		change();
		timer = setInterval("change()",2000);
	})
	
	//slideBar中的js代码
	$(".webf1").hover(
		function(){
			$(".webf1 dt").eq($(this).index()).addClass("webf1_js_bg");
			$(".webf1 dt strong").eq($(this).index()).addClass("webf1_js_color_strong");
			$(".webf1 dt a").eq($(this).index()).addClass("webf1_js_color_a");
			$(".webf1 dt a:hover").eq($(this).index()).css("color", "red");
			$(".webf1 dd").eq($(this).index()).css("display", "block");
			$(".webf1 dd").eq($(this).index()).css("top", -($(this).index()*40)+"px");
	},
		function(){
			$(".webf1 dt").eq($(this).index()).removeClass("webf1_js_bg");
			$(".webf1 dt strong").eq($(this).index()).removeClass("webf1_js_color_strong");
			$(".webf1 dt a").eq($(this).index()).removeClass("webf1_js_color_a");
			$(".webf1 dt a:hover").eq($(this).index()).css("color", "red");
			$(".webf1 dd").eq($(this).index()).css("display", "none");
		}
	)
	
	$(".pro-list li a").mouseover(
		function(){
			/*var index = $(this).index();
			$(".pro-list i").eq($(this).index()).stop().animate({left:"480px"},"slow",function(){
				$(".pro-list i").eq(index).css("left", "-160px");
				console.log(index);
			});*/
			/*$(this).find("i").stop();
			$(this).find("i").css("left", "-160px");
			$(this).find("i").animate({left:"160px"},"slow");*/
			$(this).find("i").stop().animate({left:"160px",opacity:1},500).animate({left:"-160px",opacity:0},500);
			
		}
	)
	
	$(".floor01 img").hover(
		function(){
			$(this).find(".lazyImg").stop();
			$(this).find(".lazyImg").css("opacity", 1);
			$(this).find(".lazyImg").animate({opacity:.5}, "slow");
		}
	)



