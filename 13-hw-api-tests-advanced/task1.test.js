const { fetchDataWithError } = require('./task1');

test('Check the error is handled', async () => {
	const response = await fetchDataWithError();
	expect(response).toEqual('Error fetching data: Request failed with status code 404');
});
