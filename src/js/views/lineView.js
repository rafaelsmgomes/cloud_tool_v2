export const resizeLines = width => {	
	let size1 = 102.6;
	let size2 = 92.7;

	if(width <= 1440){
		size1 = 81.15;
		size2 = 106.7;
	}

	$('.line--1').attr({
	  y2: `${size1}rem`
	});
	$('.line--2').attr({
		y1: `${size1}rem`,
	  y2: `${size1}rem`,
	  x2: `${size2}rem`
	});
	$('.line--2-a').attr({
		y1: `${size1}rem`,
	  y2: `${size1}rem`
	});
	$('.line--3').attr({
	  y1: `${size1}rem`
	});
}