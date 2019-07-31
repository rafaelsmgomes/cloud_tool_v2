import {e} from './base';
import * as func from '.././functions';

export const movePathfinderX = (btn) => {
 	
	const direction = btn.attr('direction');
 	const val = btn.attr('context'); 	 

  const left = Number(func.returnNumOnly($(`.page--${val}`).css('top'), 2));
  const top = Number(func.returnNumOnly($(`.page--${val}`).css('left'), 2));

  e.pathfinder.css("transform", `translate(${top*-1}px,${left*-1}px)`);  

  if(direction === 'up'){
  	$('.header__nav--btn--2').attr('context',Number($('.header__nav--btn--2').attr('context'))+1);
  	$('.header__nav--btn--1').attr('context',Number($('.header__nav--btn--1').attr('context'))+1);
  }else{
  	$('.header__nav--btn--2').attr('context',Number($('.header__nav--btn--2').attr('context'))-1);
  	$('.header__nav--btn--1').attr('context',Number($('.header__nav--btn--1').attr('context'))-1);
  };

  
};