import 'jquery';
import 'jquery-knob';
import 'cpr_scrollpath';

const movement = [
	['d','r'],
	['d','r'],
	['r2','u2','l2'],
	['l'],
	['l'],
	['d','r'],
	['r1','d1'],
];

$(document).ready(function(){


	$('.btn__progress').sp(movement);
	

	$(".dial-tracker").knob({
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

    	var dial_hand =$(this)[0].$div.closest('.dial-group').find( ".dial__hand" );
 			
 			var rotator = `translateX(-50%) rotate(${v-90}deg)`;

 			dial_hand.css('transform', rotator);
    },
	});

	$('.dial-tracker');
});  
