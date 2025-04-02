async function fetchTodo() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
		const data = await response.json();
		return data;
	} catch (error) {
		console.log('Error:', error);
		throw error;
	}
}

async function fetchUser() {
	try {
		const response2 = await fetch('https://jsonplaceholder.typicode.com/users/1');
		const data2 = await response2.json();
		return data2;
	} catch (error) {
		console.log('Error:', error);
		throw error;
	}
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
