const retrieveGroupText = (dialGroup) => {
	const textGroup = {};	


  if(dialGroup.hasClass('dial-group--1')){
  	textGroup.first = 'Not using the cloud';
  	textGroup.second = 'Planning for the cloud';
  	textGroup.third = 'Using cloud services';
  }else if(dialGroup.hasClass('dial-group--3')){
  	textGroup.first = 'Impede current process';
  	textGroup.second = 'No Impact';
  	textGroup.third = 'Improve Data use';
  }else{
  	textGroup.first = 'Less impact';
  	textGroup.second = 'No Impact';
  }

  return textGroup;
}

const retrieveText = (dialGroup, angle) => {

	const textGroup = retrieveGroupText(dialGroup); 

// Dial 1 + 3

	if(dialGroup.hasClass('dial-group--1') || dialGroup.hasClass('dial-group--3')){
		if(angle < 60){
	  	textGroup.result = textGroup.first;
	  }else if (angle > 60 && angle < 120){
	  	textGroup.result = textGroup.second;
	  }else{
	  	textGroup.result = textGroup.third;
	  }
	}else{
		if(angle < 90){
	  	textGroup.result = textGroup.first;
	  }else{
	  	textGroup.result = textGroup.second;
	  }
	}

// Dial 2


  return textGroup.result;
}



export const dialRotator = (dial, val) => {
  const dialHand = dial[0].$div.closest('.dial-group').find( ".dial__hand" );
  const rotator = `translateX(-50%) rotate(${val-90}deg)`;
  dialHand.css('transform',rotator);
};

export const dialContextualize = (dial, angle) => {
	const dialGroup = dial[0].$div.closest('.dial-group');
  const dialContext = dialGroup.find(".dial__context-section--1, .dial__context-section--2");
  const dialContextMain = dialGroup.find(".dial__context-section--3");
  const dialContextMainText = dialGroup.find(".dial__text--4");

  const text = retrieveText(dialGroup,angle);

  dialContext.css('display', 'none');
  dialContextMain.css('display', 'flex');
  dialContextMainText.text(text);     
};

export const progressBtn = (dial) => {
  const pageBtnProgress = dial[0].$div.closest('.page__content').find( ".btn__progress");
  pageBtnProgress.click();
}

