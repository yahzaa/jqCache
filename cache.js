/*
 * jQuery plugin to cache dom references.
 * 
 */

(function($) {
	var cache = {};
	$.fn.cache = function(selector) {
		if (cache.hasOwnProperty(selector)) {
			return cache[selector];
		} else {
			var el = $(selector);
			cache[selector] = el;
			return el;
		}
	};
}(jQuery));
