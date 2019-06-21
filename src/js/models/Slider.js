export default class SliderGroup {
    constructor(group) {
        this.group = group;
        this.sliderArray = this.retrieveSliders();
        this.progression = 0;
    }

    retrieveSliders(){
        const sliderList= this.group.find('.scroller__content');

        const sliderArray = [];
        for(let i = 0; i < sliderList.length; i++){
            sliderArray.push(sliderList[i]);
        }  
        return sliderArray;
    }

}
