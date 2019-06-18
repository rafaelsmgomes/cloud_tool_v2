// export const dialKnob = (x) => {
// 	return x.knob({
//         'min':0,
//         'max':180,
//         'angleArc':180,
//         'angleOffset': -90,   
//         'thickness': .12,
//     		'height': '200%',
//     		'displayInput': false,
//     		'bgColor': '#fff',
//     		'fgColor': '#00758f',

//         'change' : function (v) {

//         	const dialHand = $(this)[0].$div.closest('.dial-group').find( ".dial__hand" ); 
//             const dialContext = $(this)[0].$div.closest('.dial-group').find( ".dial__context-section--1, .dial__context-section--2");
//             const dialContextMain = $(this)[0].$div.closest('.dial-group').find( ".dial__context-section--3");
//      		const rotator = `translateX(-50%) rotate(${v-90}deg)`;

//      		dialHand.css('transform', rotator);
//             dialContext.css('display', 'none');
//             dialContextMain.css('display', 'flex');


//         },

//         'release': function (v){
//            const pageBtnProgress = $(this)[0].$div.closest('.page__content').find( ".btn__progress");

//            pageBtnProgress.click();
//         },

// 	});
// }
