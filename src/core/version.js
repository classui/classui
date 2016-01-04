/* ****************************************************************************
*	ClassUI 
*	Class User Interface
*	Enabling visually impaired people to see the Internet
*	info@classui.org
*	http://www.classui.org
*	
*	Version and double loading of clsUI issue resolution
* 
*	version.js
**************************************************************************** */

clsUI.conflictVersion = clsUI.conflictVersion===null || clsUI.conflictVersion==null || typeof clsUI.conflictVersion =='undefined' || undefined == clsUI.conflictVersion || void 0 ==clsUI.conflictVersion ? 0 : clsUI.conflictVersion;
clsUI.thisVersion = ( {{ VERSION.MAJOR }} * 1000) + ( {{ VERSION.MINOR }} * 100) + {{ VERSION.BUGFIX }};
clsUI.newerVersion = clsUI.conflictVersion < clsUI.thisVersion; 
clsUI.singleVersion = clsUI.conflictVersion == 0;

clsUI.canLoad = function() {
	return clsUI.singleVersion || clsUI.newerVersion? true : !clsUI.funcExists.apply(arguments);
	if 
};

clsUI.funcExists = function() {
	var 
	return true;
};