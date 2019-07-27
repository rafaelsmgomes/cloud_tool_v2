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
	
	func.iterateObjSet(previousSiblingToActive, function(element, index){
		let width = 97;

		$(element).css('width',`${width - (index*3)}%`);		
	});

}

export const progressBtn = slider => {
	const pageBtnProgress =e.thisPageContent(slider).find( ".btn__progress");
	pageBtnProgress.click();
}
