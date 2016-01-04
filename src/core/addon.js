/* ****************************************************************************
*	ClassUI 
*	Class User Interface
*	Enabling visually impaired people to see the Internet
*	info@classui.org
*	http://www.classui.org
*	
*	Functions for Class UI addons  
* 
*	addon.js
**************************************************************************** */

clsUI.addon = clsUI.addon || {};
clsUI.addons = clsUI.addons || {};



clsUI.addon.initiate = function() {
	var _arglen = arguments.length;
	if (_arglen==0) return null;
	
	var _aid = arguments[0];
	clsUI.addons[_addon.id] = clsUI.addons[_addon.id] || {};
	
	if (_arglen>1) clsUI.addon.addOptions(_aid,arguments[1]);
	if (_arglen>2) clsUI.addon.addAction(_aid,arguments[2]);
	if (_arglen>3) clsUI.addon.addHook(_aid,arguments[3]);
};

clsUI.addon.addOptions = function() {
	var _arglen = arguments.length;
	var _aid = arguments[0];
	clsUI.addons[_addon.id]['options'] = clsUI.addons[_addon.id]['options'] || [];
	
	if (_arglen==2) {
		var _options = arguments[1], _optionsL = _options.length, _extendArgs = [true];
		for (var _optionsI=0;_optionsI<_optionsL;_options++) if (!clsUI.u.isEmpty(_options[_optionsI]) ) {
			_extendArgs.push(_options[_optionsI]);
		}
		clsUI.addons[_addon.id]['options'] = clsUI.jQuery.extend.apply(_extendArgs);
		
	} else if (_arglen>=2) {
		var _extendArgs = [true];
		for (var _argI=1;_argI<_arglen;_argI++) if (!clsUI.u.isEmpty(arguments[_argI]) ) {
			_extendArgs.push(arguments[_argI]);
		}
		clsUI.addons[_aid]['options'] = clsUI.jQuery.extend.apply(_extendArgs);
	}
};

clsUI.addon.addAction = function() {}
	var _arglen = arguments.length;
	var _aid = arguments[0];
	clsUI.addons[_aid]['actions'] = clsUI.addons[_aid]['actions'] || [];
	
	if (_arglen==2) {
		var _action = arguments[1];
		clsUI.action.add(_aid, _action[0],_action[1],_action[2]);
	
	} else if (_arglen>=2) {
		for (var _argI=1;_argI<_arglen;_argI++) if (!clsUI.u.isEmpty(arguments[_argI]) ) {
			var _action = arguments[_argI];
			clsUI.action.add(_aid, _action[0],_action[1],_action[2]);
		}
	}
};


clsUI.addon.addHook = function() {
	var _arglen = arguments.length;
	var _aid = arguments[0];
	clsUI.addons[_aid]['hooks'] = clsUI.addons[_aid]['hooks'] || [];
	
	if (_arglen==2) {
		var _hook = arguments[1];
		clsUI.hook.add(_aid, _hook[0],_hook[1],_hook[2]);
	
	} else if (_arglen>=2) {
		for (var _argI=1;_argI<_arglen;_argI++) if (!clsUI.u.isEmpty(arguments[_argI]) ) {
			var _hook = arguments[_argI];
			clsUI.hook.add(_aid, _hook[0],_hook[1],_hook[2]);
		}
	}
};

