function fetchTodo() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.log('Error:', error);
			throw error;
		});
}

function fetchUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((response2) => response2.json())
		.then((data2) => {
			return data2;
		})
		.catch((error) => {
			console.log('Error:', error);
			throw error;
		});
}

Promise.all([fetchTodo(), fetchUser()])
	.then((values) => {
		console.log(`Promise.all values are: `);
		console.log(values);
	})
	.catch((error) => {
		console.error(error);
	});

Promise.race([fetchTodo(), fetchUser()]).then((values) => {
	console.log(`Promise.race values are: `);
	console.log(values);
});
