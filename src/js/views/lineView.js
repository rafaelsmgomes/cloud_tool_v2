export const resizeLines = width => {	
	let size1 = 102.6;

	if(width <= 1440){
		size1 = 81.15;
	}

	$('.line--1').attr({
	  y2: `${size1}rem`
	});
	$('.line--2').attr({
		y1: `${size1}rem`,
	  y2: `${size1}rem`
	});
	$('.line--2-a').attr({
		y1: `${size1}rem`,
	  y2: `${size1}rem`
	});
	$('.line--3').attr({
	  y1: `${size1}rem`
	});
}