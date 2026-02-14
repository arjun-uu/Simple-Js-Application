const url = 'https://age-calculator-pro.p.rapidapi.com/api/Age/calculateAge?dateOfBirth=1991-11-25&utcOffset=0';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0f93afd07bmsh05709c4b8c7030bp15dabfjsn32daff070889',
		'x-rapidapi-host': 'age-calculator-pro.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}