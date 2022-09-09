// Alert Function
document.querySelector('search') .addEventListener('click',
      () =>alert('search'));
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e069d28176mshf9dbc8a6ad35c5bp1ddd10jsn82428ec17183',
		'X-RapidAPI-Host': 'real-estate12.p.rapidapi.com'
	}
};

fetch('https://real-estate12.p.rapidapi.com/listings/sale?state=CA&city=Los%20Angeles&page=1&sort=relevant&type=single-family%2Cmulti-family', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));