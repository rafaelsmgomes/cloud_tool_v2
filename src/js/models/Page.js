export default class Page {
    constructor() {
        this.pageNumber = 0;
    }

    incrementPageNum(){        
        this.pageNumber++;        
    }

    decrementPageNum(){
        this.pageNumber--;
    }
}
