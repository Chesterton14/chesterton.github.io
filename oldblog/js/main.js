
$(function() {
	'use strike';
	var sidebar = $('#sidebar');
	var mark = $('#mark');
	var sidebar_trigger = $('#sidebar_trigger');
	var back = $('#back-to-top');

	function showsidebar() {
		mark.fadeIn();
		sidebar.css('right', 0);
	}

	function hidesidebar() {
		mark.fadeOut();
		sidebar.css('right', -sidebar.width());
	}

	function backto() {
		$('html,body').animate({
			scrollTop: 0
		}, 600);
	}
	$(window).on('scroll',function()
	{
		if ($(window).scrollTop() > $(window).height())
		back.fadeIn();
		else
		back.fadeOut();
	})
	$(window).trigger('scroll');
	
	$("div.item-group span").mouseenter(function(){
		var left=$(this).position().left;
		var top=$(this).position().top;
		var width=$(this).css("width");
		var destleft=parseInt(left)-50;
		$("img#MyPic").css("left",destleft);
		$("img#MyPic").css("top",top-250);
		$("img#MyPic").fadeIn(600);
	});
	$("div.item-group span").mouseleave(function(){
		$("img#MyPic").hide();
	});
	
	sidebar_trigger.on('click', showsidebar);
	mark.on('click', hidesidebar);
	back.on('click', backto);
})