import 'jquery';
import 'jquery-knob';
import 'cpr_scrollpath';

import * as v from './variables';

import {e} from './views/base';
import * as dk from './views/dialView';

$(document).ready(function(){

	e.btnProgress.sp(v.movement);
	$('.btn__progress--1').click();
	dk.dialKnob(e.dialTracker);

});  


