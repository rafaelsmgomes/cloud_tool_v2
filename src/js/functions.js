export const dialKnob = (x) => {
	return x.knob({
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,   
        'thickness': .12,
    		'height': '200%',
    		'displayInput': false,
    		'bgColor': '#fff',
    		'fgColor': '#00758f',

        'change' : function (v) {

        	const dial_hand =$(this)[0].$div.closest('.dial-group').find( ".dial__hand" ); 			
     			const rotator = `translateX(-50%) rotate(${v-90}deg)`;

     			dial_hand.css('transform', rotator);
        },
	});
}
