/* ****************************************************************************
*	ClassUI 
*	Class User Interface
*	Enabling visually impaired people to see the Internet
*	info@classui.org
*	http://www.classui.org
*	
*	Instantiate Class UI and related name spaces and closures
* 
*	init.js
**************************************************************************** */

window.clsUI = window.clsUI || {};
var clsUI = window.clsUI;

clsUI.jQuery = clsUI.jQuery || jQuery || $;

clsUI.deferQueues = clsUI.deferQueues || {};
clsUI.deferQueues.jQueryLoad = clsUI.deferQueues.jQueryLoad || [];
clsUI.deferQueues.windowLoad = clsUI.deferQueues.windowLoad || [];
clsUI.deferQueues.documentReady = clsUI.deferQueues.documentReady || [];

if (typeof window['canvas']==='undefined' || typeof XCMSJQ==='canvas')  var canvas;
if (typeof window['ctx']==='undefined' || typeof ctx==='undefined') var ctx;

clsUI.debug = clsUI.debug || {};
clsUI.debug.consolelog = clsUI.debug.consolelog || function(){};