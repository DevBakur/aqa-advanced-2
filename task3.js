async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        return response.json();
    } catch (error) {
        console.error('Error fetching todo:', error);
        throw error;
    }
}

async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        return response.json();
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}

async function fetchDataWithAsyncAwait() {
    try {
        const todo = await fetchTodo();
        const user = await fetchUser();
        console.log('Todo:', todo);
        console.log('User:', user);
        return { todo, user };
    } catch (error) {
        console.error('Error in fetchDataWithAsyncAwait:', error);
        throw error;
    }
}

fetchDataWithAsyncAwait()
    .then(result => {
        console.log('Result from fetchDataWithAsyncAwait:', result);
    })
    .catch(error => {
        console.error('Error in main:', error);
    });
