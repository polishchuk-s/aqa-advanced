const { fetchData } = require('./task2');

test('Check the custom header and param in request', async () => {
	const url = 'https://httpbin.org/get';
	const headers = {
		'Content-Type': 'application/json',
	};
	const params = {
		bookId: 9781449331818,
	};

	const res = await fetchData(url, headers, params);

	expect(res.headers['Content-Type']).toBe('application/json');
	expect(res.args).toEqual({
		bookId: '9781449331818',
	});
});
