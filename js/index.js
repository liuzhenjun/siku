
$("document").ready(function(){
	var index = 0;
	var l = $(".skSliderimg ul li").size();
	function myshow(){
		$(".skSliderimg ul li").eq(index).find(".img1").animate({"left":"0px"},1000);
		$(".skSliderimg ul li").eq(index).find(".img2").animate({"left":"550px"},1000);
	}

	var timer = setInterval(function(){change()},2000);
	
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
		timer = setInterval(function(){change()},2000);
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
	$(".skSlider_btnleft").mousedown(function(){
		clearInterval(timer);
		$(".skSliderimg ul li").eq(index-1).fadeIn(100).siblings().fadeOut(100);
		$(".skSlidernav ul li").eq(index-1).addClass("select").siblings().removeClass("select");
		index-=1;
		timer = setInterval(function(){change()},2000);
	})
	$(".skSlider_btnright").mousedown(function(){
		clearInterval(timer);
		$(".skSliderimg ul li").eq(index+1).fadeIn(100).siblings().fadeOut(100);
		$(".skSlidernav ul li").eq(index+1).addClass("select").siblings().removeClass("select");
		index+=1;
		timer = setInterval(function(){change()},2000);
	})
})