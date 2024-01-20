function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching todo:', error);
            throw error;
        });
}

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching user:', error);
            throw error;
        });
}

function fetchDataWithPromiseAll() {
    return Promise.all([fetchTodo(), fetchUser()])
        .then(([todo, user]) => {
            console.log('Todo:', todo);
            console.log('User:', user);
            return { todo, user };
        })
        .catch(error => {
            console.error('Error in fetchDataWithPromiseAll:', error);
            throw error;
        });
}

function fetchDataWithPromiseRace() {
    return Promise.race([fetchTodo(), fetchUser()])
        .then(result => {
            console.log('First resolved:', result);
            return result;
        })
        .catch(error => {
            console.error('Error in fetchDataWithPromiseRace:', error);
            throw error;
        });
}

fetchDataWithPromiseAll()
    .then(resultFromPromiseAll => {
        console.log('Result from Promise.all:', resultFromPromiseAll);
        return fetchDataWithPromiseRace();
    })
    .then(resultFromPromiseRace => {
        console.log('Result from Promise.race:', resultFromPromiseRace);
    })
    .catch(error => {
        console.error('Error in main:', error);
    });
