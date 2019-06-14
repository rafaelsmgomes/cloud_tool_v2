import 'jquery';
import 'jquery-knob';
import 'cpr_scrollpath';

import * as f from './functions';
import * as v from './variables';
import {e} from './views/base';

$(document).ready(function(){

	e.btnProgress.sp(v.movement);
	f.dialKnob(e.dialTracker);
	
});  


