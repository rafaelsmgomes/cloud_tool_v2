import 'jquery';
import 'jquery-knob';
import 'cpr_scrollpath';

import Selector from './models/Selector';

import {e} from './views/base';
import * as dk from './views/dialView';
import * as sv from './views/selectorView';

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

	// TEST
	$('.btn__progress--3').click();
	// TEST 

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

    	const dialHand = $(this)[0].$div.closest('.dial-group').find( ".dial__hand" ); 
      const dialContext = $(this)[0].$div.closest('.dial-group').find( ".dial__context-section--1, .dial__context-section--2");
      const dialContextMain = $(this)[0].$div.closest('.dial-group').find( ".dial__context-section--3");
	 		const rotator = `translateX(-50%) rotate(${v-90}deg)`;

	 		dialHand.css('transform', rotator);
      dialContext.css('display', 'none');
      dialContextMain.css('display', 'flex');
    },

    'release': function (v){
       const pageBtnProgress = $(this)[0].$div.closest('.page__content').find( ".btn__progress");
       pageBtnProgress.click();
    },
	});

/****** SELECTOR CONTROLLER ******/
	state.selected = new Selector();

	e.selection.on('click',function(){
		const self =  $(this);

		const select = self.data('val');
		console.log(state.selected.choices);
		console.log(self);
		if(!state.selected.choices.includes(select)){
			sv.highlightSelected(self);
			state.selected.selectOption(select);
		}else{
			sv.deHighlightSelected(self);
			state.selected.removeOption(select);
		}

		if(state.selected.choices.length === 3){
    	const pageBtnProgress = self.closest('.page__content').find( ".btn__progress");
    	pageBtnProgress.click();
		}
	});
});  


