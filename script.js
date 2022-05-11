let todoInput, errorInfo, addBtn, ulList, newTodo, popup, popupInfo, todoToEdit, popupInput, popupAddBtn, popupCloseBtn

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
	popup = document.querySelector('.popup')
	popupInfo = document.querySelector('.popup-info')
	popupInput = document.querySelector('.popup-input')
	popupAddBtn = document.querySelector('.accept')
	popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTodo)
	ulList.addEventListener('click', checkClick)
	popupCloseBtn.addEventListener('click', closePopu)
	popupAddBtn.addEventListener('click', acceptPopu)
	todoInput.addEventListener('keyup', eneterPopu)
}

const addNewTodo = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		createToolsArea()
		ulList.append(newTodo)
		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!'
	}
}

const createToolsArea = () => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('tools')

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'

	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.textContent = 'EDIT'

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerHTML = '<i class="fas fa-check"></i>'

	toolsPanel.append(completeBtn, editBtn, deleteBtn)
	newTodo.append(toolsPanel)
}

const checkClick = e => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed')
		e.target.classList.toggle('completed')
	} else if (e.target.matches('.edit')) {
		editTodo(e)
	} else if (e.target.matches('.delete')) {
		deleteTodo(e)
	}
}

const editTodo = e => {
	popup.style.display = 'flex'
	todoInput = e.target.closest('li')
	popupInput.value = todoInput.firstChild.textContent
}

const acceptPopu = () => {
	if (popupInput.value !== '') {
		todoInput.firstChild.textContent = popupInput.value
		popup.style.display = 'none'
		popupInfo.textContent = ''
	} else {
		popupInfo.textContent = 'Podaj treść'
	}
}

const closePopu = () => {
	popup.style.display = 'none'
}

const deleteTodo = e => {
	e.target.closest('li').remove()
	const allTodos = ulList.querySelectorAll('li')
	if (allTodos.length == 0) {
		errorInfo.textContent = 'Dodaj zadania'
	} else {
		errorInfo.textContent = ''
	}
}

const eneterPopu = (e) => {
	if(e.key==='Enter' ){
		addNewTodo()
	}
}

document.addEventListener('DOMContentLoaded', main)
