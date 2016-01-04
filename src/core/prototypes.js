/* ****************************************************************************
*	ClassUI 
*	Class User Interface
*	Enabling visually impaired people to see the Internet
*	info@classui.org
*	http://www.classui.org
*	
*	Extensions to JavaScript
* 
*	prototypes.js
**************************************************************************** */

if (typeof Function.prototype.bind==='undefined') { Function.prototype.bind = function(scope) {
	var _function = this; return function() { return _function.apply(scope, arguments); }
}};

if (typeof Array.prototype.indexOf==='undefined') {Array.prototype.indexOf = function(obj, start) {
	for (var i = (start || 0), j = this.length; i < j; i++) { if (this[i] === obj) { return i; } }return -1;
}};

if (typeof String.prototype.format==='undefined') {
String.prototype.format = function() { return String.format(this, arguments.length == 1 ? arguments[0] : arguments);};
String.format = function(source, params) {
	var _toString = function(obj, format) {
		var ctor = function(o) {
			if (typeof o === 'number')
				return Number;
			else if (typeof o === 'boolean')
				return Boolean;
			else if (typeof o === 'string')
				return String;
			else
				return o.constructor;
		}(obj);
		var proto = ctor.prototype;
		var formatter = typeof obj !== 'string' ? proto ? proto.format || proto.toString : obj.format || obj.toString : obj.toString;
		if (formatter)
			if (typeof format === 'undefined' || format == "")
				return formatter.call(obj);
			else
				return formatter.call(obj,format);
			else
				return "";
	};
	if ( arguments.length == 1 ) return function() {
		return String.format.apply( null, [source].concat( Array.prototype.slice.call( arguments, 0 ) ) );
	};
	if ( arguments.length == 2 && typeof params !== 'object' && typeof params !== 'array') params = [ params ];
	if ( arguments.length > 2 ) params = Array.prototype.slice.call(arguments, 1);
	source = source.replace(/\{\{|\}\}|\{([^}: ]+?)(?::([^}]*?))?\}/g, function(match, num, format) {
		if (match == "{{") return "{";
		if (match == "}}") return "}";
		if (typeof params[num] !== 'undefined' && params[num] !== null) {
			return _toString(params[num], format);
		} else {
			return "";
		}
	});
	return source;
}};
if (typeof String.prototype.endsWith==='undefined') {String.prototype.endsWith = function (suffix) {return (this.substr(this.length - suffix.length) === suffix);}};
if (typeof String.prototype.startsWith==='undefined') {String.prototype.startsWith = function(prefix) {return (this.substr(0, prefix.length) === prefix);}};
