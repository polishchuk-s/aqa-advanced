const axios = require('axios');

test("Test1 - User can receive all posts", async () => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBe(100);
});

test("Test2 - User can receive a specific post", async () => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/posts/1', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(typeof response.data).toBe("object");
    expect(response.data.id).toEqual(1);
});

test("Test3 - User can receive comments of a specific post", async () => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const firstObject = response.data[0];
    const expectedKeys = ["postId", "id", "name", "email", "body"];

    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.data)).toBe(true);
    expectedKeys.forEach(function (key) {
        expect(firstObject).toHaveProperty(key);
    });
});

test("Test4 - User can receive all photos", async () => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const firstObject = response.data[0];
    const expectedKeys = ["albumId", "id", "title", "url", "thumbnailUrl"];

    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBe(5000);
    expectedKeys.forEach(function (key) {
        expect(firstObject).toHaveProperty(key);
    });
});

test("Test5 - User can add a new post", async () => {
    let response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Post1',
        body: 'Lorem Post1',
        userId: 2,
    },
        {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    const expectedKeys = ["title", "body", "userId", "id"];

    console.log(response.data);
    expect(response.status).toEqual(201);
    expectedKeys.forEach(function (key) {
        expect(response.data).toHaveProperty(key);
    });
});
