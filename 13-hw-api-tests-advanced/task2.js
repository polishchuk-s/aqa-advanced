const axios = require('axios');

async function fetchData(url, headers, params) {
	try {
		const response = await axios.get(url, {
			headers: headers,
			params: params,
		});
		return response.data;
	} catch (error) {
		throw new Error(error);
	}
}

module.exports = { fetchData };
