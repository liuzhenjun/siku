
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
	
	$(".pro-list li a").mouseenter(
		function(){
			/*var index = $(this).index();
			$(".pro-list i").eq($(this).index()).stop().animate({left:"480px"},"slow",function(){
				$(".pro-list i").eq(index).css("left", "-160px");
				console.log(index);
			});*/
			/*$(this).find("i").stop();
			$(this).find("i").css("left", "-160px");
			$(this).find("i").animate({left:"160px"},"slow");*/
			var Owidth=$(this).outerWidth();
			$(this).find("i").stop().animate({'left':Owidth},500).animate({'left':"-160px"},1);
			
		}
	)
	
	$(".floor01 img").hover(
		function(){
			$(this).find(".lazyImg").stop();
			$(this).find(".lazyImg").css("opacity", 1);
			$(this).find(".lazyImg").animate({opacity:.5}, "slow");
		}
	)

	//侧边栏
	/*$(".togo a").mouseover(function(){
		var index=$(this).index();
		console.log(index);
		$(this).find("em").css("display", "block").siblings().find("em").css("display", "none");
		
	})*/
	/*$(".togo a").each(function(){
		$(".togo a").eq($(this).index()).find("em").css("display", "block");
	})*/
	var isClick=false;
	$(".togo a").hover(
		function(){
			/*$(this).find("em").css("display", "block").siblings().find("em").css("display", "none");*/
			$(this).find("em").show();
			$(this).find("b").hide();
			var index=$(this).index();
			
			$(this).siblings().find("em").hide();
			$(this).siblings().find("b").show();
			/*$(this).click(function(){
				isClick=true;
				var iTop=$(".floorList .floor").eq(index).offset().top;
				console.log(iTop);
				
				$("html,body").animate({scrollTop:iTop},function(){
					isClick=false;
				});
			})*/
		}
	)
	$(".togo a").click(function(){
		isClick=true;
		var iTop=$(".floorList .floor").eq($(this).index())
.offset().top;
		$("html,body").animate({scrollTop:iTop},function(){
					isClick=false;
		});
	})
	
$(window).scroll(function(){
	if($(window).scrollTop()>$(".floor01").offset().top){
		$(".fsFixedTopContent").css("display","block");
		if(!isClick){
			var wTop=$(window).scrollTop();
			$(".floorList .floor").each(function(){
				if(wTop >= $(this).offset().top) {
							var li = $(".togo a").eq($(this).index());
							/*li.find("em").addClass("active");
							li.siblings().find("em").removeClass("active");*/
							li.find("em").show();
							li.find("b").hide();
							
							
							li.siblings().find("em").hide();
							li.siblings().find("b").show();
						}
			})
		}
	}
	else{
		$(".fsFixedTopContent").css("display","none");
	}
})

$(".hw-section .col1 a").hover(function(){
	$(this).find("img").stop().animate({opacity:.8},500).animate({opacity:1});
	
})
$(".hw-section .col2 a").hover(function(){
	$(this).find("img").stop().animate({opacity:.8},500).animate({opacity:1});
	
})


$(".brand-logo li .bd").hover(
	function(){
	/*$(this).find("a").stop().animate({'padding-left':"-60px"},500);*/
	//$(this).find("img").stop().animate({'margin-left':'-120px'},100);
	$(this).find("i").stop().animate({'right':0},500);
},
function(){
	/*$(this).find("a").stop().animate({'margin-left':0},500);*/
	//$(this).find("img").stop().animate({'margin-left':0},100);
	$(this).find("i").stop().animate({'right':"-90px"},500);
}
)

var index1=0;
var widthSlide=230;
var timer1 = setInterval(function(){
	console.log("555");
	index1++;
	if(index1==6){
		index1=0;
	}
	var SlideValue=index1*widthSlide;
	$(".slide-m .slide ul").animate({'left':-SlideValue},300)
},1000)

$(".slide-m .prev").click(function(){
	clearInterval(timer1);
	index1+=2;
	timer1 = setInterval(function(){
	console.log("555");
	index1++;
	if(index1>6){
		index1=0;
	}
	var SlideValue=index1*widthSlide;
	$(".slide-m .slide ul").animate({'left':-SlideValue},300)
},1000)
})

$(".slide-m .next").click(function(){
	clearInterval(timer1);
	index1-=2;
	timer1 = setInterval(function(){
	console.log("555");
	index1++;
	if(index1>6){
		index1=0;
	}
	var SlideValue=index1*widthSlide;
	$(".slide-m .slide ul").animate({'left':-SlideValue},300)
},1000)
})
