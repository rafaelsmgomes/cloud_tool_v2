import {e} from './base';
import * as func from '.././functions';

export const nextScrollerExist = slider => {
	return e.thisNextScrollElement(slider).hasClass('scroller__content');
}

export const progressScrollerContent = slider => {	
	e.thisScrollElement(slider).addClass('scroller__content--deactive');
	e.thisScrollElement(slider).removeClass('scroller__content--active');
	e.thisNextScrollElement(slider).addClass('scroller__content--active');

	const previousSiblingToActive = e.thisNextScrollElement(slider).prevAll();
	
	func.iterateObjSet(previousSiblingToActive);

	// e.thisNextScrollElement(slider).prevAll().each( function(e, i) {
	// 	console.log(e);
	// });
}

export const progressBtn = slider => {
	const pageBtnProgress =e.thisPageContent(slider).find( ".btn__progress");
	pageBtnProgress.click();
}
