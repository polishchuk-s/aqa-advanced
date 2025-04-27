const axios = require('axios');

async function fetchDataWithError() {
	try {
		const response = await axios.get('https://www.apple.com/1234');
		return response.data;
	} catch (error) {
		return `Error fetching data: ${error.message}`;
	}
}

module.exports = { fetchDataWithError };
