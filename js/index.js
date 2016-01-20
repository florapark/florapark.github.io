$(document).ready(function(){

	$('.tab-links a').on('click', function()
	{
		var current = $(this).attr('href');
		$('.tab' + current).fadeIn(400).siblings().hide();
		$(this).parent('li').addClass('active').siblings().removeClass('active');
		$('.intro').hide();

	});
});