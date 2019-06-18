export default class Selector {
    constructor() {
        this.choices = [];
    }

    selectOption(x){
        if(this.choices.length !== 3){
            this.choices.push(x)
        };
    }

    removeOption(x){
    	const index = this.choices.indexOf(x);
    	this.choices.splice(index, 1);
    }
}
