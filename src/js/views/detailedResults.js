

export const displayResults = (session, peer) => {
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

	$('#result-peer--1').append(
		`<span class='block'>${peer['1']}</span>`
	);
	$('#result-peer--2').append(
		`<span class='block'>${peer['2']}</span>`
	);
	$('#result-peer--3').append(
		`<span class='block'>${peer['3']}</span>`
	);
	$('#result-peer--4').append(
		`<span class='block'>${peer['4']}</span>`
	);
	$('#result-peer--5').append(
		`<span class='block'>${peer['5']}</span>`
	);
	$('#result-peer--6').append(
		`<span class='block'>${peer['6']}</span>`
	);
};