export const animateStuff = (btnVal) => {

	if(btnVal === 1){
		$('.landing__container').addClass('landing__container--fadeout');
		$('.landing__title').addClass('landing__title--fadeout');
		$('.landing__subtitle').addClass('landing__subtitle--fadeout');
		
		setTimeout(function(){
			$('.page--2').addClass('activate');				
			$('.line--1, .line--2').addClass('activate');
			$('.footer').addClass('activate');
		},7500);		
	}
		else if(btnVal === 2){
		$('.page--2').removeClass('activate');
		$('.footer').removeClass('activate');

		setTimeout(function(){
			$('.page--3').addClass('activate');
			$('.line--2-a, .line--3, .line--4').addClass('activate');
			$('.footer').addClass('activate');		
			$('.footer-text').text('2/6');		
		},7500);		
	}
	else if(btnVal === 3){
		$('.page--3').removeClass('activate');
		$('.footer').removeClass('activate');		
		setTimeout(function(){
			$('.btn__regress').addClass('rotate');
			$('.page--4').addClass('activate');		
			$('.line--5, .line--6, .line--7').addClass('activate');
			$('.footer').addClass('activate');
			$('.footer-text').text('3/6');				
		},10000);		
	}else if(btnVal === 4){
		$('.page--4').removeClass('activate');
		$('.footer').removeClass('activate');
		setTimeout(function(){
			$('.page--5').addClass('activate');
			$('.line--8').addClass('activate');
			$('.footer').addClass('activate');
			$('.footer-text').text('4/6');						
		},6000-1000);		
	}else if(btnVal === 5){
		$('.page--5').removeClass('activate');
		$('.footer').removeClass('activate');
		setTimeout(function(){
			$('.page--6').addClass('activate');		
			$('.line--9').addClass('activate');
			$('.footer').addClass('activate');			
			$('.footer-text').text('5/6');					
		},6000-1000);		
	}else if(btnVal === 6){
		$('.page--6').removeClass('activate');
		$('.footer').removeClass('activate');
		
		setTimeout(function(){
			$('.btn__regress').removeClass('rotate');
			$('.page--7').addClass('activate');		
			$('.line--10, .line--11').addClass('activate');
			$('.footer').addClass('activate');				
			$('.footer-text').text('6/6');		
		},7500);	
	}else if(btnVal === 7){
		$('.page--7').removeClass('activate');
		$('.footer').removeClass('activate');
		setTimeout(function(){
			$('.line__wrapper--1').css('opacity',1)
		}, 7000);	
	}












	;
};