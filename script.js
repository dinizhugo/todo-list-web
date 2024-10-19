const button = document.querySelector(".button-add-task")
const input = document.querySelector(".input-task")
const todoList = document.querySelector("#todoList")

const addTodoItem = function(text) {
    const listItem = document.createElement("div");
    listItem.classList.add('list-item');

    const itemText = document.createElement("small")
    itemText.textContent = text
    itemText.classList.add('item-text')

    const completeButton = document.createElement("button")
    completeButton.textContent = "Concluir"
    completeButton.classList.add('item-button-complete')
    completeButton.onclick = () => { 
        listItem.classList.toggle("completed")
        todoList.append(listItem)
    }

    const removeButton = document.createElement("button")
    removeButton.textContent = "Remover"
    removeButton.classList.add('item-button-remove')
    removeButton.onclick = () => { todoList.removeChild(listItem) }

    listItem.appendChild(itemText)
    listItem.appendChild(completeButton)
    listItem.appendChild(removeButton)
    todoList.prepend(listItem)
}

button.addEventListener('click', () => {
    const todoText = input.value.trim()

    if (todoText) {
        addTodoItem(input.value)
        input.value = ''
    }
})
