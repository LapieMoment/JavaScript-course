let btnAddTask,
	btnCompleteTask,
	btnDeleteTask,
	btnEditTask,
	inputValueTask,
	ulList,
	errorInfo,
	popup,
	btnCancelPopup,
	btnAcceptPopup,
	inputValuePopup,
	currentTask,
	popupInfo

const main = () => {
	domElements()
	domEvents()
}

const domElements = () => {
	btnAddTask = document.querySelector('.btn-add')
	inputValueTask = document.querySelector('.todo-input')
	ulList = document.querySelector('ul')
	errorInfo = document.querySelector('.error-info')
	popup = document.querySelector('.popup')
	btnCancelPopup = document.querySelector('.cancel')
	btnAcceptPopup = document.querySelector('.accept')
	inputValuePopup = document.querySelector('.popup-input')
	popupInfo = document.querySelector('.popup-info')
}

const domEvents = () => {
	btnAddTask.addEventListener('click', addNewTask)
	ulList.addEventListener('click', optionInTask)
	btnCancelPopup.addEventListener('click', closePopup)
	btnAcceptPopup.addEventListener('click', acceptPopup)
}

const optionInTask = e => {
	if (e.target.classList.contains('complete')) {
		e.target.closest('li').classList.toggle('completed')
		e.target.classList.toggle('completed')
	} else if (e.target.classList.contains('edit')) {
		popup.style.display = 'flex'
		inputValuePopup.value = e.target.closest('li').firstChild.textContent
		currentTask = e.target.closest('li')
	} else if (e.target.classList.contains('delete')) {
		e.target.closest('li').remove()
		let numberOfTasks = document.querySelectorAll('li')
		if (numberOfTasks.length == 0) {
			errorInfo.textContent = 'Brak zadań do wykonania, wpisz następne! :)'
		}
	}
}

const addNewTask = () => {
	if (inputValueTask.value !== '') {
		li = document.createElement('li')
		li.textContent = inputValueTask.value
		createNewTask(li)
		console.log(li)
		ulList.append(li)
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz jakieś zadanie'
	}
}

const createNewTask = e => {
	const div = document.createElement('div')
	div.classList.add('tools')
	const btn1 = document.createElement('button')
	btn1.classList.add('complete')
	btn1.innerHTML = '<i class="fas fa-check"></i>'
	const btn2 = document.createElement('button')
	btn2.classList.add('edit')
	btn2.textContent = 'EDIT'
	const btn3 = document.createElement('button')
	btn3.classList.add('delete')
	btn3.innerHTML = '<i class="fas fa-check"></i>'
	div.append(btn1, btn2, btn3)
	e.append(div)
}

const closePopup = () => {
	popup.style.display = 'none'
}

const acceptPopup = () => {
	if (inputValuePopup.value !== '') {
		currentTask.firstChild.textContent = inputValuePopup.value
		popup.style.display = 'none'
	} else {
		popupInfo.textContent = 'Zadanie musi mieć nazwę'
	}
}

document.addEventListener('DOMContentLoaded', main)
