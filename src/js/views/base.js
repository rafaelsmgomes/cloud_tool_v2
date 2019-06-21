export const e = {
	btnProgress: $('.btn__progress'),
	dialTracker: $(".dial-tracker"),
	selection: $(".selection__container"),
	restartBtn: $('.header__rectangle--1'),

	thisDialElement: function(start,reference,end){
		$(start)[0].$div.closest(reference).find(end); 	
	},
	thisScrollElement: function(slider){
		return $(`#${slider}`).closest('.scroller__content');	
	},
	thisNextScrollElement: function(slider){
		return $(`#${slider}`).closest('.scroller__content').next('.scroller__content');
	},
	thisPageContent: function(slider){
		return $(`#${slider}`).closest('.page__content');
	}
};
