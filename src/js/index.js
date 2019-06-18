import 'jquery';
import 'jquery-knob';
import 'cpr_scrollpath';

import {e} from './views/base';

import Selector from './models/Selector';

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

	// // TEST
	// $('.btn__progress--3').click();
	// // TEST 

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

/****** SELECTOR CONTROLLER ******/
	state.selected = new Selector();

	e.selection.on('click',function(){
		const self =  $(this);
		const select = self.data('val');
		
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


