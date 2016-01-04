/* ****************************************************************************
*	ClassUI 
*	Class User Interface
*	Enabling visually impaired people to see the Internet
*	info@classui.org
*	http://www.classui.org
*	
*	Blank JavaScript file typically named clsui.js and put into the addon/(plugin|widget|library)/vX_X_X/ folder.
* 
*	clsui.js
**************************************************************************** */

/*
{{ ADDON_ID }} : value will be replaced with addon's id value
*/

/*
 * Individual function calls
 */
/*
clsUI.addon.initiate('{{ ADDON_ID }}');
clsUI.addon.addOptions('{{ ADDON_ID }}',[jQuery.{{ ADDON_ID }}.defaults,{}]);
clsUI.addon.addAction('{{ ADDON_ID }}', 'actionName',function(args){}, {});
clsUI.addon.addHook('{{ ADDON_ID }}', 'hookName',function(args){}, {});
*/

/*
 * Single function call
 */
clsUI.addon.initiate(
	'{{ ADDON_ID }}'
	,[jQuery.{{ ADDON_ID }}.defaults,{}]
	,[
	  {'actionName',function(args){}, {}}
	]
	,[
	  {'hookName',function(args){}, {}}
	]
);