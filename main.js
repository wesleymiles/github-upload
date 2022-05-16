
	(function($) {
		var allPanels = $('.project .fold-bottom').hide();
		$('.project .fold-top a.more').click(function() {
			allPanels.slideUp();
			$('a.more').show();
			$(this).parent().next().slideDown();
			$(this).parent().find("a.more").hide();
			return false;
		});
		$('.project .fold-bottom a.less').click(function() {
			allPanels.slideUp();
			$('a.more').show();
			return false;
		});
	})(jQuery);