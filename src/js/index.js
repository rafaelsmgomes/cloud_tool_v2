import 'bodymovin';
import 'jquery';
import 'rangeslider.js';
import 'jquery-knob';
import 'cpr_scrollpath';
import 'lottie-web';

import {e} from './views/base';

import Dial from './models/Dial';
import Selector from './models/Selector';
import Page from './models/Page';
import * as PeersData from './models/PeersData';
import SliderGroup from './models/Slider';

import * as bP from './views/buttonProgressView';
import * as css from './views/cssView';
import * as dial from './views/dialView';
import * as header from './views/headerView';
import * as pagination from './views/paginationView';
import * as result from './views/resultsView';
import * as selector from './views/selectorView';
import * as sl from './views/sliderView';

import * as func from './functions';

import dataJson from './data.json';

const datax = dataJson;

// console.log(datax.layers.shapes[1].e.a.s);
console.log(datax.layers[0].shapes[1].e.k[1].s[0]);

datax.layers[0].shapes[1].e.k[1].s[0] = 100;

console.log(datax.layers[0].shapes[1].e.k[1].s)

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

	let userAggregateValue = 0;

	e.btnProgress.sp(movement);

	state.pageNum = new Page();

	$('.btn__progress--7').click();

	e.btnProgress.on('click',function(){
		const value = $(this).data('val');
		state.pageNum.incrementPageNum();
		header.toggleRestartBtn(state.pageNum.pageNumber);
		css.changeBodyColor('black');
		
		bP.animateStuff(value);
	});

	e.btnProgress7.on('click',function(){
		css.changeBodyColor('white');
		userAggregateValue = 
			state.dial1.val +
			state.dial2.val +
			state.dial3.val +
			state.slider1.val +
			state.slider2.val;
		result.displayValues(userAggregateValue, PeersData.highlightPagination);
	});

/****** DIAL CONTROLLER ******/
	state.dial1 = new Dial();
	state.dial2 = new Dial();
	state.dial3 = new Dial();

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
	 		this.selfID = self[0].$div.prevObject.data('id');	 		
	 		this.dial = assignDial(this.selfID);	

	 		this.dial.changeValue(v);

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
    	}else if(pageContentElement.find('.scroller__wrapper').hasClass('scroller__wrapper--2')){
    		sliderGroup = state.slider2;
    	}
    	sliderGroup.progression++;
    	
    	pagination.highlightPagination(pageContentElement, sliderGroup.progression);

    	sliderGroup.pushToVal(value);

    	if(sl.nextScrollerExist(slider)){    	
    		sl.progressScrollerContent(slider);    			
    		sliderGroup.calculateVal();
    	}else{
    		sliderGroup.calculateVal();
	    	sl.progressBtn(slider);	    	
    	};      		   
    }
	});

/****************  CLOUD LOTTIE  ********************/ 

lottie.loadAnimation({
  container: document.getElementById('cloud__wrapper'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: dataJson,
});

	function assignDial(dataId){
		let x;
		if(dataId === 1){
			x = state.dial1;
		}else if(dataId === 2){
			x = state.dial2;
		}else{
			x = state.dial3;
		}
		return x;		
	}

});  

