(function(global, $, undefined){
	'use strict';

	var $skip_navigation = $('#skip_navigation');
		// $skip_nav_links = $skip_navigation.find('a').wrapAll('<ul>').wrap('<li>');

	var $skip_links = $skip_navigation
			.addClass('skip-content')
			.find('a')
			.addClass('a11y-hidden focusable');

	$skip_links.on('click', function (e) {
		e.preventDefault();
		var $target = $(e.target.getAttribute('href'));

		$target.attr('tabindex', -1).focus();
	})

})(window, window.jQuery);