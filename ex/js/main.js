(function(global, $, undefined){
	'use strict';
	
	var $gnb = $('#gnb'),
		$gnb_links = $('a', $gnb);

	// $gnb_links.wrapAll('<ul>').wrap('<li>').parents('ul').unwrap().wrapAll('<nav id="gnb">').find('a').wrapInner('<span>');

	// $gnb_links
	// 	.wrapAll('<ul>').wrap('<li>')
	// 	.parents('#gnb').replaceWith(function (index, contents) {
			
	// 		return '<nav id="gnb">' + contents + '</nav>'
	// }) .find('a').wrapInner('<span>')


	$gnb.replaceWith(function(index, contents) {
		var contents = $(contents).filter('a').wrapAll('<ul>').wrap('<li>').parents('ul');
		contents = '<ul>'+contents.html()+'</ul>';
		return '<nav id = "gnb">' + contents + '</nav>';
	});

	$('a', '#gnb').wrapInner('<span></span>');


})(window, window.jQuery);