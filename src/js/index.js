import 'jquery';
import 'rangeslider.js';
import 'jquery-knob';
import 'cpr_scrollpath';

import {e} from './views/base';

import Selector from './models/Selector';
import Page from './models/Page';
import SliderGroup from './models/Slider';

import * as dial from './views/dialView';
import * as header from './views/headerView';
import * as pagination from './views/paginationView';
import * as selector from './views/selectorView';
import * as sl from './views/sliderView';

$(document).ready(function(){

 	const state = {};

/****** CPRSCROLLPATH/MOVEMENT CONTROLLER ******/
	let movement = [
		['d','r'],
		['d','r'],
		['r2','u2','l2'],
		['l'],
		['l'],
		['d','r'],
		['r1','d1'],
	];
	e.btnProgress.sp(movement);

	state.pageNum = new Page();

	// $('.btn__progress--1').click();

	e.btnProgress.on('click',function(){
		state.pageNum.incrementPageNum();
		header.toggleRestartBtn(state.pageNum.pageNumber);
	});

/****** DIAL CONTROLLER ******/
	e.dialTracker.knob({
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
      const self = $(this);
	 	
	 		dial.dialRotator(self,v);
			dial.dialContextualize(self,v);	 		
    },
    'release': function (v){
      const self = $(this);

      dial.progressBtn(self);
    },
	});

/****** SELECTOR CONTROLLER ******/
	state.selected = new Selector();

	e.selection.on('click',function(){
		const self =  $(this);
		const select = self.data('val');
		const pageContentElement = self.closest('.page__content');
		let stateChoicesLength;

		if(!state.selected.choices.includes(select)){
			selector.highlightSelected(self);
			state.selected.selectOption(select);
		}else{
			selector.deHighlightSelected(self);
			state.selected.removeOption(select);
		}

		stateChoicesLength = state.selected.choices.length;

		pagination.highlightPagination(pageContentElement, stateChoicesLength);

		if(state.selected.choices.length === 3){
    	selector.progressBtn(self);
		}
	});

/****** SLIDER CONTROLLER ******/
	state.slider1 = new SliderGroup($('.scroller__wrapper--1'));
	state.slider2 = new SliderGroup($('.scroller__wrapper--2'));


	$('input[type="range"]').rangeslider({
	  polyfill: false,

    // Callback function on slide
    onSlide: function(position, value) {    	
    },

    // Callback function on end
    onSlideEnd: function(position, value) {
    	const slider = this.identifier;    	
    	const pageContentElement = $(`#${slider}`).closest('.page__content');
    	let sliderGroup;

    	if(pageContentElement.find('.scroller__wrapper').hasClass('scroller__wrapper--1')){
    		sliderGroup = state.slider1;    		    		
    	}else{
    		sliderGroup = state.slider2;
    	}
    	sliderGroup.progression++;
    	
    	pagination.highlightPagination(pageContentElement, sliderGroup.progression);


    	if(sl.nextScrollerExist(slider)){    	
    		sl.progressScrollerContent(slider);
    	}else{
	    	sl.progressBtn(slider);
    	};      		   
    }
	});
});  


