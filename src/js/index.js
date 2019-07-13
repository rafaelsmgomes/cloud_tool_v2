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
import * as line from './views/lineView';
import * as pagination from './views/paginationView';
import * as page from './views/pageView';
import * as path from './views/pathView';
import * as result from './views/resultsView';
import * as selector from './views/selectorView';
import * as sl from './views/sliderView';

import * as func from './functions';

import peersJson from './peerCloud.json';
import userJson from './userCloud.json';
import scrollJson from './scrollDown.json';

$(document).ready(function(){	

 	const state = {};

/****** PAGE/LINE CONTROLLER ******/ 
	state.width = $('body').width();
	// state.height = e.page.height();
	// page.reformWandH(state.width, state.height);

	line.resizeLines(state.width);

	$(window).on('resize',function(){
		state.width = $('body').width();
		// state.height = $(window).height();				
		page.reformWandH();

		line.resizeLines(state.width);
	});

	$('.page--8').on('scroll',function(){
		$('.page--8').addClass('activate');	
	})

/****** CPRSCROLLPATH/MOVEMENT CONTROLLER ******/

	state.userAggregateValue = 0;
	
	// PROGRESS 
	e.btnProgress.sp(path.movement, path.easing);

	state.pageNum = new Page();
	e.btnProgress.on('click',function(){
		const value = $(this).data('val');
		state.pageNum.incrementPageNum();
		bP.animateFwd(value);
		header.toggleRestartBtn(state.pageNum.pageNumber);
		css.changeBodyColor('black');
	});

	e.btnProgress1.on('click',function(){
		e.headerWrapper.addClass('activate');
	});

	e.btnProgress7.on('click',function(){
		
		// Change color after click
		css.changeBodyColor('white');

		// Shows score in results after click
		state.userAggregateValue = 
			state.dial1.val +
			state.dial2.val +
			state.dial3.val +
			state.slider1.val +
			state.slider2.val;

		result.displayValues(state.userAggregateValue, PeersData.peerScore);

		// Animate cloud after click
		const cloudPeer = peersJson;
		const cloudUser = userJson;

		cloudPeer.layers[0].shapes[1].e.k[1].s[0] = PeersData.peerScore;
		cloudUser.layers[0].shapes[1].e.k[1].s[0] = state.userAggregateValue;

		result.displayResultsCopy(state.userAggregateValue, PeersData.peerScore);

		// setTimeout(function(){
		// 	loadCloudAnimation(cloudUser, cloudPeer);		
		// },7000);
		setTimeout(function(){
			loadCloudAnimation(cloudUser, cloudPeer);		
		},3000);

	});

	// REGRESS

	e.btnBack.dp(path.movement2,path.easing2,path.pageList);	

	e.btnBack.on('click', function(){
		const x = $(this).attr('context');
		bP.animateBack(x);
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

	dial.changeDialText();

	$(window).on('resize',function(){
		dial.changeDialText();
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
/****************  LINE CONTROLLER  ********************/ 
	
	
/****************  ELOQUA CONTROLLER  ********************/ 
	$('.detailed-score__btn').on('click',function(){
		css.displayEloqua();
	});

/****************  CLOUD/ LOTTIE INIT  ********************/ 
	lottie.loadAnimation({
	  container: document.getElementById('scroll_down'),
	  renderer: 'svg',	  
	  autoplay: true,
	  animationData: scrollJson,
	  loop: true,
	});
});  

/****************  CLOUD LOTTIE  ********************/ 

function loadCloudAnimation(user,peer){
	$('#cloud__wrapper').css('opacity', 1);

	lottie.loadAnimation({
	  container: document.getElementById('cloud__wrapper'),
	  renderer: 'svg',	  
	  autoplay: true,
	  animationData: user,
	});

	lottie.loadAnimation({
	  container: document.getElementById('cloud__wrapper'),
	  renderer: 'svg',	  
	  autoplay: true,
	  animationData: peer,
	});
}




