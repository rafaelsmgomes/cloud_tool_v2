export const resizeLines = () => {	
	const width = $('.page__content').width();
	const height = $('.page').height();

	/*** THIS IS example for size 1, I multiplied, (4x20) + (5.7x20) + 2 + (.6833 * height) ***/ 
		// let size1 = `calc(4rem + 5.7rem + 2px + 68.33vh)`;
	let line1x = width/2;
	let line1y1 = 80+114+2+.6833*height;
	let line1y2 = 1000 + 1*height - 35.00;
	
	// let line2x1 = 700;
	// let line2x2 = 1854; // Activation point
	// let line2x3 = 2554;
	// let line2y = 1000 + 1*height - 35.00;

	// let line3x = 2554; // Stable X
	// let line3y1 = 1000 + 1*height - 35.00; // Line Begin
	// let line3y2 = 2000 + 1*height - 35; // Line End

	// let line_4n5_x1 = 2554; // Line Begin
	// let line_4n5_x2 = 5572; // Line Activated
	// let line_4n5_x3 = 7877; // Line End
	// let line_4n5_y = 2000 + 1*height - 35; // Stable Y

	// let line6x = 7877; // Stable X
	// let line6y1 = 2000 + 1*height - 35; // Line Begin
	// let line6y2 = - 3000 + 1*height - 35; // Line End

	// let line_7n8n9_x1 = 7877; // Line Begin
	// let line_7n8n9_x2 = 5600; // Line Activated 1
	// let line_7n8n9_x3 = 20; // Line Activated 2
	// let line_7n8n9_x4 = - 5542; // Line End
	// let line_7n8n9_y = - 3000 + 1*height - 35; // Stable Y

	// let line10x = - 5542; // Stable X
	// let line10y1 = - 3000 + 1*height - 35; // Line Begin
	// let line10y2 = 2000 + 1*height - 35; // Line End

	// let line_11n12_x1 = - 5542; // Line Begin
	// let line_11n12_x2 = - 3681; // Line Activated
	// let line_11n12_x3 = 700; // Line End
	// let line_11n12_y = 2000 + 1*height - 35; // Stable Y


	if(width <= 1450 && height <= 650){
		// size1 = 14.35rem + 40.83vh
		line1y1 = 14.35*20 + .4083*height;
		line1y2 = 1000 + 1*height - 35.00;
	}

	// //Line for Page 1
	// $('.line--1').attr({
	//     y1: line1y1,
	//     y2: line1y2,
	//     x1: line1x,
	//     x2: line1x,
	// });
	// //Lines 2 and 2-a for Question 1
	// $('.line--2').attr({
	//     y1: line2y,
	//     y2: line2y,
	//     x1: line2x1,
	//     x2: line2x2,
	// });
	// $('.line--2-a').attr({
	//     y1: line2y,
	//     y2: line2y,
	//     x1: line2x2,
	//     x2: line2x3,
	// });
	// //Line 3 (down)
	// $('.line--3').attr({
	//     y1: line3y1,
	//     y2: line3y2,
	//     x1: line3x,
	//     x2: line3x,
	// });
	// //Lines 4 and 5 for Question 2
	// $('.line--4').attr({
	//     y1: line_4n5_y,
	//     y2: line_4n5_y,
	//     x1: line_4n5_x1,
	//     x2: line_4n5_x2,
	// });
	// $('.line--5').attr({
	//     y1: line_4n5_y,
	//     y2: line_4n5_y,
	//     x1: line_4n5_x2,
	//     x2: line_4n5_x3,
	// });
	// // Line 6 (up) 
	// $('.line--6').attr({
	// 	y1: line6y1,
	// 	y2: line6y2,
	// 	x1: line6x,
	// 	x2: line6x,
	// });
	// // Lines 7, 8 and 9 for Questions 3, 4 and 5
	// $('.line--7').attr({
	//     y1: line_7n8n9_y,
	//     y2: line_7n8n9_y,
	//     x1: line_7n8n9_x1,
	//     x2: line_7n8n9_x2,
	// });
	// $('.line--8').attr({
	//     y1: line_7n8n9_y,
	//     y2: line_7n8n9_y,
	//     x1: line_7n8n9_x2,
	//     x2: line_7n8n9_x3,
	// });
	// $('.line--9').attr({
	//     y1: line_7n8n9_y,
	//     y2: line_7n8n9_y,
	//     x1: line_7n8n9_x3,
	//     x2: line_7n8n9_x4,
	// });
	// // Line 10 (down)
	// $('.line--10').attr({
	// 	y1: line10y1,
	// 	y2: line10y2,
	// 	x1: line10x,
	// 	x2: line10x,
	// });
	// // Lines 11 and 12 for Questions 6 and Results
	// $('.line--11').attr({
	//     y1: line_11n12_y,
	//     y2: line_11n12_y,
	//     x1: line_11n12_x1,
	//     x2: line_11n12_x2,
	// });
	// $('.line--12').attr({
	//     y1: line_11n12_y,
	//     y2: line_11n12_y,
	//     x1: line_11n12_x2,
	//     x2: line_11n12_x3,
	// });
}