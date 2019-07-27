import {e} from './base';
import * as func from '.././functions';

export const nextScrollerExist = slider => {
	return e.thisNextScrollElement(slider).hasClass('scroller__content');
}

export const progressScrollerContent = slider => {	
	e.thisScrollElement(slider).addClass('scroller__content--deactive');
	e.thisScrollElement(slider).removeClass('scroller__content--active');
	e.thisNextScrollElement(slider).addClass('scroller__content--active');

	const pageHeight = func.returnNumOnly(e.pageContent.css('height'),2);

	//Shrinks previous siblings into a row if body is below height 650;
	if(pageHeight <= 650){
		const previousSiblingToActive = e.thisNextScrollElement(slider).prevAll();
		const nextSiblingToActive = e.thisNextScrollElement(slider).nextAll();

		applySliderGroupShrink(previousSiblingToActive);
		applySliderGroupShrink(nextSiblingToActive);

		$('.scroller__content--active').css({
			'width':'100%',
			'opacity':'1'
		});
	};
}

export const setSliderGroupSize = () =>{
	const pageHeight = func.returnNumOnly(e.pageContent.css('height'),2);
	
	if(pageHeight <= 650){
		const nextSiblingToActive = $('.scroller__content--active').nextAll();
		applySliderGroupShrink(nextSiblingToActive);
	} 
}

export const progressBtn = slider => {
	const pageBtnProgress =e.thisPageContent(slider).find( ".btn__progress");
	pageBtnProgress.click();
}

function applySliderGroupShrink(sibling){
	func.iterateObjSet(sibling, function(element, index){
		let width = 97;
		let opacity = .8;
		$(element).css('width',`${width - (index*3)}%`);
		$(element).css('opacity',`${opacity - (index*.2)}`);		
	});	
}