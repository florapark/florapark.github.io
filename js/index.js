$(document).ready(function()
{

	$('.tabs .tab-links a').on('click', function(e)
	{
		var current = $(this).attr('href');
		$('.tabs' + current).fadeIn(400).siblings().hide();
		$(this).parent('li').addClass('active').siblings().removeClass('active');
		e.preventDefaut();

	});
});