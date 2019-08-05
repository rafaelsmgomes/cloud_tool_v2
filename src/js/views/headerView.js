import {e} from './base';

// export const initHeader = (pageNum) => {
// 	if(pageNum === 0){
// 		e.restartBtn.hide();
// 	};
// }

export const toggleRestartBtn = (pageNum) => {
	if(pageNum !== 0){
		e.restartBtn.addClass('toggle');
	}else{
		e.restartBtn.removeClass('toggle'); 
	}
}

export const hideHeader = (pageNum) => {
	const screenWidth = $('.page').width();
	const height = $('.page').height();
	console.log(pageNum, screenWidth, height);
	if (pageNum === 4 && screenWidth <= 767 && height <= 380){
		e.headerWrapper.addClass('hidden');
	} else {
		e.headerWrapper.removeClass('hidden');
	}
}
