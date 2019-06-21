import 'jquery';
import 'rangeslider.js';
import 'jquery-knob';
import 'cpr_scrollpath';
import 'vue';

import {e} from './views/base';

import Selector from './models/Selector';
import Page from './models/Page';

import * as dk from './views/dialView';
import * as hd from './views/headerView';
import * as sv from './views/selectorView';
import * as sd from './views/sliderView';

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
	
	e.btnProgress.on('click',function(){
		state.pageNum.incrementPageNum();
		hd.toggleRestartBtn(state.pageNum.pageNumber);
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
	 		
	 		dk.dialRotator(self,v);
			dk.dialContextualize(self);	 		
    },
    'release': function (v){
      const self = $(this);

      dk.progressBtn(self);
    },
	});

/****** SELECTOR CONTROLLER (NEEDS TO BE MODULARIZXED) ******/
	state.selected = new Selector();

	e.selection.on('click',function(){
		const self =  $(this);
		const select = self.data('val');
		
		console.log(state.selected);

		if(!state.selected.choices.includes(select)){
			sv.highlightSelected(self);
			state.selected.selectOption(select);
		}else{
			sv.deHighlightSelected(self);
			state.selected.removeOption(select);
		}

		if(state.selected.choices.length === 3){
    	sv.progressBtn(self);
		}
	});

/****** SLIDER CONTROLLER ******/
	$('input[type="range"]').rangeslider({
	  polyfill: false,

    // Callback function on slide
    onSlide: function(position, value) {    	
    },

    // Callback function on end
    onSlideEnd: function(position, value) {
    	const slider = this.identifier;

    	if(sd.nextScrollerExist(slider)){    	
    		sd.progressScrollerContent(slider);
    	}else{
	    	sd.progressBtn(slider);
    	};
    }
	});
});  


