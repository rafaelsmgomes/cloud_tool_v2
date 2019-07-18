export const e = {
	btnProgress: $('.btn__progress'),
	btnProgress1: $('.btn__progress--1'),
	btnProgress2: $('.btn__progress--2'),
	btnProgress3: $('.btn__progress--3'),
	btnProgress4: $('.btn__progress--4'),
	btnProgress5: $('.btn__progress--5'),
	btnProgress6: $('.btn__progress--6'),
	btnProgress7: $('.btn__progress--7'),
	btnProgress7: $('.btn__progress--7'),	
	hdrProgress: $('.header__progress'),

	btnBack: $('.btn__regress'),

	dialTracker: $(".dial-tracker"),
	headerWrapper: $(".header__wrapper"),
	selection: $(".selection__container"),
	restartBtn: $('.header__rectangle--1'),
	firstScrollers: $('scroller__wrapper--1'),
	secondScrollers: $('scroller__wrapper--2'),
	userValue: $('#userValue'),
	peersValue: $('#peersValue'),
	page: $('.page'),
	results__copy: $('.results__copy'),

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
