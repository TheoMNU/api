import { createCard } from "../module/createCard.js";


async function fetchUsers() {
    const usersResponse = await fetch('http://138.68.173.105/api/users', {
        method: 'GET',
        // body: JSON.stringify(),
        headers: {
            // 'Content-type': 'application/json; charset=UTF-8',
            'userKey': "c2f202b5-19df-44c4-a296-ed8a552bb434"
        },
    })
    const usersData = await usersResponse.json()
    return usersData
}


async function fetchTodos() {
    const todosResponse = await fetch('http://138.68.173.105/api/todos', {
        method: 'GET',
        // body: JSON.stringify(),
        headers: {
            // 'Content-type': 'application/json; charset=UTF-8',
            'userKey': "c2f202b5-19df-44c4-a296-ed8a552bb434"
        },
    })
    const todosData = await todosResponse.json();
    return todosData;
}


export async function fetchData() {
    const usersData = await fetchUsers();
    const usersTodos = await fetchTodos();
    createCard(usersData, usersTodos)
}