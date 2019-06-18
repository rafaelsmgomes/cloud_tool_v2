export const e = {
	btnProgress: $('.btn__progress'),
	dialTracker: $(".dial-tracker"),
	selection: $(".selection__container"),

	thisDialElement: function(start,reference,end){
		$(start)[0].$div.closest(reference).find(end); 	
	}
};
