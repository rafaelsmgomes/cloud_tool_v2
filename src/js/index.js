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

// console.log(Knob);

$(document).ready(function(){
	$('.btn__progress').sp(movement);
	
	// tests
	$('.btn__progress--5').click();
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
	});
});  
