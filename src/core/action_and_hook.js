/* ****************************************************************************
*	ClassUI 
*	Class User Interface
*	Enabling visually impaired people to see the Internet
*	info@classui.org
*	http://www.classui.org
*	
*	Functions for Class UI actions and hooks  
* 
*	action_and_hook.js
**************************************************************************** */

clsUI.action = clsUI.action || {};
clsUI.actions = clsUI.actions || {};

clsUI.action.set = function(namespace,actionName,actionFunction,actionArgs) {
	clsUI.action._do(namespace,actionName,actionFunction,actionArgs,{'_do':'add','reset':true});
}
clsUI.action.add = function(namespace,actionName,actionFunction,actionArgs) {
	clsUI.action._do(namespace,actionName,actionFunction,actionArgs,{'_do':'add'});
};

clsUI.action.del = function(namespace,actionName) {
	clsUI.action._do(namespace,actionName,null,null,{'_do':'del'});
};

clsUI.action._do = function(namespace,actionName,actionFunction,actionArgs,options) {
	var _ns = clsUI.u.isBlank(namespace)?'':namespace;
	clsUI.actions[_ns] = clsUI.actions[_ns] || {};
	
	var _name = clsUI.u.isBlank(actionName)?'':actionName;
	if (options['_do']=='add') {
		clsUI.actions[_ns][_name] = clsUI.u.isTrue(options['reset'])?[] : clsUI.actions[_ns][_name] || []; 
		clsUI.actions[_ns][_name].push({'fn':actionFunction,'args':actionArgs});
	
	} else if (options['_do']=='del') {
		clsUI.actions[_ns][_name] = clsUI.u.emptyArray(clsUI.actions[_ns][_name]);
	}
};


clsUI.hook = clsUI.hook || {};
clsUI.hooks = clsUI.hooks || {}; 

