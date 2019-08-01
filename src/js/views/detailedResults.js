export const displayResults = (session) => {
	$('#result-ex--1').append(
		`<span class='block'>${session.dial1}</span>` 
	);
	$('#result-ex--2').append(
		`<span class='block'>${session.dial2}</span>` 
	);
	$('#result-ex--3').append(
		`<span class='block'>${session.selector1}</span>` 
	);
	$('#result-ex--4').append(
		`<span class='block'>${session.dial3}</span>` 
	);
	$('#result-ex--5').append(
		`<span class='block'>${session.slider1}</span>` 
	);
	$('#result-ex--6').append(
		`<span class='block'>${session.slider2}</span>` 
	);
};