const cardContainer = document.querySelector(".card-container");

export function createCard(firstArray, secondArray) {
    firstArray.forEach(user => {
        const cardUser = document.createElement("div")
        const displayNameUser = document.createElement("h2")
        cardUser.classList.add('card-user')
        cardContainer.append(cardUser)
        displayNameUser.innerText = ` ${user.name}`
        cardUser.append(displayNameUser)

        secondArray.forEach(todo => {
            if (todo.userId == user.id && !todo.completed) {
                const displayTodo = document.createElement("p")
                displayTodo.innerText = ` --- ${todo.title}`
                displayNameUser.appendChild(displayTodo)
            }
        });
    });
}

