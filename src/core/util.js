/* ****************************************************************************
*	ClassUI 
*	Class User Interface
*	Enabling visually impaired people to see the Internet
*	info@classui.org
*	http://www.classui.org
*	
*	Utility functions for checks, using strings, arrays and dates  
* 
*	util.js
**************************************************************************** */

clsUI.u = clsUI.u || {};

clsUI.u.isEmpty = function() {
	var _a = arguments[0];
	return _a===null || _a==null || typeof _a =='undefined' || undefined == _a || void 0 ==_a; 
};

clsUI.u.isBlank = function() {
	var _a = arguments[0];
	return clsUI.u.isEmpty(_a) || (_a+'').length==0;
};

clsUI.u.isTrue = function() {
	//code this
};

clsUI.u.isFalse = function() {
	//code this
};


clsUI.u.emptyArray = function() {
	return arguments[0].splice(0,arguments[0].length);
};