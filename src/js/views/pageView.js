import {e} from './base';

const lineItems = {
	0: [50,95.2,50,195.22],
	1: [50,195.22,113,195.22],
	2: [113,195.22,150,195.22],
	3: [150,195.22,150,295.22],
	4: [150,295.22,313,295.22],
	5: [313,295.22,425,295.22],
	6: [425,295.22,425,-204.78],					
	7: [425,-204.78,387,-204.78],	
	8: [387,-204.78,-204.78],
	9: [87,-204.78,-286.5,-204.78],					
	10: [-286.5,-204.78,-286.5,295.22],
	11: [-286.5,295.22,-187,295.22],					
	12: [-187,295.22,50,295.22],
}

export const reformWandH = (width, height) =>{

	e.page.css( "width", `${width}px` );
	e.page.css( "height", `${height}px` );

	const line = $('.line');

	$('.main-container').addClass('main-container-resize');

	setTimeout(function(){
		$('.main-container').removeClass('main-container-resize');		
	}, 1500);

	for(let i = 0; i < line.length; i++){

		const lineX1 = lineItems[i][0]/100;
		// const lineY1 = lineItems[i][1]/100;
		const lineX2 = lineItems[i][2]/100;
		// const lineY2 = lineItems[i][3]/100;
	
		$(line[i]).attr('x1', `${lineX1 * width}px`);
		// $(line[i]).attr('y1', `${lineY1 * height}px`);
		$(line[i]).attr('x2', `${lineX2 * width}px`);
		// $(line[i]).attr('y2', `${lineY2 * height}px`);
	}
}
