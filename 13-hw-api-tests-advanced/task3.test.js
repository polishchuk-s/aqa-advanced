const axios = require('axios');
const { fetchData } = require('./task3');

jest.mock('axios');

test('Response for successful request', async () => {
	axios.get.mockResolvedValue({ data: { book: 'Green Book' } });
	const url = 'https://httpbin.org/get';
	const headers = {
		'Content-Type': 'application/json',
	};
	const params = {
		bookId: 9781449331818,
	};

	const res = await fetchData(url, headers, params);
	expect(res).toEqual({ book: 'Green Book' });
});

test('Request fails with error', async () => {
	axios.get.mockRejectedValue(new Error('Request failed'));

	const url = 'https://httpbin.org/get';
	const headers = {
		'Content-Type': 'application/json',
	};
	const params = {
		bookId: 9781449331818,
	};

	const res = fetchData(url, headers, params);
	await expect(res).rejects.toThrow('Request failed');
});
