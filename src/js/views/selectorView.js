export const highlightSelected = (selected)=> {
	selected.addClass('selection__container--active');
}

export const deHighlightSelected = (selected)=> {
	selected.removeClass('selection__container--active');
}

export const progressBtn = selection => {
	const pageBtnProgress = selection.closest('.page__content').find( ".btn__progress");
	
	pageBtnProgress.click();
}