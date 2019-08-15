import {e} from './base';

export const toggleRestartBtn = (pageNum) => {
	if(pageNum !== 0){
		e.restartBtn.addClass('toggle');
	}else{
		e.restartBtn.removeClass('toggle'); 
	}
}