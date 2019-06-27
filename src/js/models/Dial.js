export default class Dial {
    constructor() {       
    	this.val = 0;
    }

    changeValue(v){        
    	this.val = Math.round(20*(v/180));
    }
}
