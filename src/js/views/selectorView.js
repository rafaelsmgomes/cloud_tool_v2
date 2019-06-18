export const highlightSelected = (selected)=> {
	selected.addClass('selection__container--active');
}

export const deHighlightSelected = (selected)=> {
	selected.removeClass('selection__container--active');
}