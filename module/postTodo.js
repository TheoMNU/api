const form = document.querySelector("#form");


export function transformInput() {
    const formData = new FormData(form);
    const plainFormData = Object.fromEntries(formData.entries())
    const formDataJsonString = JSON.stringify(plainFormData)

    return formDataJsonString
}


export async function pushNewTodo(todoContent) {
    const result = await fetch('http://138.68.173.105/api/todos', {
        method: 'POST',
        body: todoContent,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'userKey': "c2f202b5-19df-44c4-a296-ed8a552bb434"
        },
    })
}

export function newTodo(e) {
    e.preventDefault();
    const todoInputValue = transformInput()
    pushNewTodo(todoInputValue);
}