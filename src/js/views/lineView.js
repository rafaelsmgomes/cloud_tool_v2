export const resizeLines = () => {	
	const width = $('.page__content').width();
	const height = $('.page').height();

	/*** THIS IS example for size 1, I multiplied, (4x20) + (5.7x20) + 2 + (.6833 * height) ***/ 
		// let size1 = `calc(4rem + 5.7rem + 2px + 68.33vh)`;
	let line1y1 = 80+114+2+.6833*height;
	let line1y2 = 1000 + 1*height - 35.00;
	let line1x1 = width/2;
	let line1x2 = width/2;


	if(width <= 1450 && height <= 650){
		// size1 = 14.35rem + 40.83vh
		line1y1 = 14.35*20 + .4083*height;
		line1y2 = 1000 + 1*height - 35.00;
	}

	//Line for Page 1
	$('.line--1').attr({
	    y1: line1y1 ,
	    y2: line1y2,
	    x1: line1x1 ,
	    x2: line1x2,
	});
	// //Line for Question 1
	// $('.line--1').attr({
	// 	y2: ysize2,
	// });
	// $('.line--2').attr({
	// 	y1: ysize2,
	// 	y2: ysize2
	// });
	// //Line for Question2
	// $('.line--2').attr({
	// 	y1: ysize2,
	// 	y2: ysize2
	// });






	// $('.line--2').attr({
	// 	y1: `${size1}rem`,
	//     y2: `${size1}rem`,
	//     x2: `${size2}rem`
	// });
	// $('.line--2-a').attr({
	// 	y1: `${size1}rem`,
	//     y2: `${size1}rem`
	// });
	// $('.line--3').attr({
	//     y1: `${size1}rem`
	// });

	// //Line for Question 3
	// $('.line--3').attr({
	// 	y2: `${size3}rem`,
	// });
	// $('.line--4').attr({
	// 	y1: `${size3}rem`,
	// 	y2: `${size3}rem`,
	// 	x2: `${size4}rem`
	// });
	// $('.line--5').attr({
	// 	y1: `${size3}rem`,
	// 	y2: `${size3}rem`
	// });
	// $('.line--6').attr({
	// 	y1: `${size3}rem`
	// });

	// //Line height for Question 3
	// $('.line--6').attr({
	// 	y2: `${size5}rem`
	// });
	// $('.line--7').attr({
	// 	y1: `${size5}rem`,
	// 	y2: `${size5}rem`,
	// 	x2: `${size6}rem`
	// });
	// $('.line--8').attr({
	// 	y1: `${size5}rem`,
	// 	y2: `${size5}rem`,
	// 	x1: `${size6}rem`,
	// 	x2: `${size7}rem`
	// });
	// $('.line--9').attr({
	// 	y1: `${size5}rem`,
	// 	y2: `${size5}rem`,
	// 	x1: `${size7}rem`
	// });
	// $('.line--10').attr({
	// 	y1: `${size5}rem`
	// });


}