import 'jquery';
import 'jquery-knob';
import 'cpr_scrollpath';

import * as f from './functions';
import * as v from './variables';
import {e} from './views/base';

$(document).ready(function(){

	e.btnProgress.sp(v.movement);
	$('.btn__progress--1').click();
	f.dialKnob(e.dialTracker);

});  


