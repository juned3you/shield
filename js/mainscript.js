// JavaScript Document

$(document).ready(function(e){
	
	//BANNER
	$('.cc_banner ul').bxSlider(
		{
		
		auto:true,
		pager:true,
		controls:true,
		nextText:' ',
		prevText:' ' 
		}
	);
	
	//small slider
	$('.cc_slider ul').bxSlider(
		{
		mode:'fade',
		speed:1500,
		auto:true,
		pager:false,
		controls:true,
		nextText:' ',
		prevText:' ' 
		}
	);
	
	
	//ftrd product slider
	$(".cc_carousel ul ").carouFredSel({
			width   : "100%",
			scroll  : {
				items :1 ,
				pauseOnHover: true
				},
			prev	: {	
				button	: "#cc_prev",
				key		: "left"
			},
			next	: { 
				button	: "#cc_next",
				key		: "right"
			},
			circular: true,
			infinite: false,
			auto 	: true,
	});
	
	
	
	
});