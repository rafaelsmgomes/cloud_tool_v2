export const dialRotator = (dial, val) => {
    const dialHand = dial[0].$div.closest('.dial-group').find( ".dial__hand" );
    const rotator = `translateX(-50%) rotate(${val-90}deg)`;
    dialHand.css('transform',rotator);
};

export const dialContextualize = (dial) => {
    const dialContext = dial[0].$div.closest('.dial-group').find(".dial__context-section--1, .dial__context-section--2");
    const dialContextMain = dial[0].$div.closest('.dial-group').find(".dial__context-section--3");

    dialContext.css('display', 'none');
    dialContextMain.css('display', 'flex');    
};

export const progressBtn = (dial) => {
   const pageBtnProgress = dial[0].$div.closest('.page__content').find( ".btn__progress");
   pageBtnProgress.click();
}