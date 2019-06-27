export const changeBodyColor = (color) => {
  if(color === 'white'){
  	$('body').addClass('bg-white');
  }else{
  	$('body').removeClass('bg-white');
  }
};