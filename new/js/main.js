(function(global, $, undefined){
	'use strict';
	
	var $box = $('#exsize');

	$box.on('click', function () {
		$(this).innerWidth(function (index, width) {
			var change_value = width * 2;
			if (change_value > 800) {
				change_value = 800;
				$(this).off('click')
			}
			console.log('clicked');
			return change_value;
		});
	})

	var $beforebox = $('<div id="box-before">beforebox</div>');
	

	$beforebox.insertBefore($box);

	$('<div id="box-after">after box</div>').insertAfter($box);
	// $box.before('<p class="beforebox">Lorem ipsum dolor.<p>')
	// $box.after('<p class="afterbox">Lorem ipsum dolor.<p>')
	// 
	
	function append (target, last) {
		target.insertAdjacentHtml('beforeend', last)
	}
	function prepend (target, first) {
		target.insertAdjacentHtml('afterbegin', first)
	}
	function insertBefore (target, prev) {
		target.insertAdjacentHtml('beforebegin', prev)
	}
	function insertAfter (target, next) {
		target.insertAdjacentHtml('afterend', next)
	}

	$beforebox.prepend('<span class="inside-before-box">inside</span>');
	

})(window, window.jQuery);