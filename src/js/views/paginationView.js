export const highlightPagination = (element, stateKey) => {
		var paginationNodeList = element.find( ".pagination__num");
		var paginationArray = [];

		for(let i = 0; i < paginationNodeList.length; i++){
			paginationArray.push(paginationNodeList[i]);
		}
		console.log(stateKey);
		// console.log(paginationArray);
		// console.log(paginationNodeList);
		paginationNodeList.removeClass('pagination--active');

		for(let j = 0; j < stateKey; j++){
			
			$(paginationArray[j]).addClass('pagination--active');			
		}
}