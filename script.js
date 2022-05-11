const input = document.querySelector('.todo-input')
const inputEdit = document.querySelector('.popup-input')
const errorInfo = document.querySelector('.error-info')
const btnAddTask = document.querySelector('.btn-add')
const popup = document.querySelector('.popup')
const popupBtnCancel = document.querySelector('.cancel')
const btnDeleteTask1 = document.querySelector('[data-id="test1"] .delete')
const btnDeleteTask2 = document.querySelector('[data-id="test2"] .delete')
const btnDeleteTask3 = document.querySelector('[data-id="test3"] .delete')
const editBtnTask1 = document.querySelector('[data-id="test1"] .edit')
const editBtnTask2 = document.querySelector('[data-id="test2"] .edit')
const editBtnTask3 = document.querySelector('[data-id="test3"] .edit')
const c1 = document.querySelector('[data-id="test1"] .complete')
const c2 = document.querySelector('[data-id="test2"] .complete')
const c3 = document.querySelector('[data-id="test3"] .complete')
const task1 = document.querySelector('[data-id="test1"]')
const task2 = document.querySelector('[data-id="test2"]')
const task3 = document.querySelector('[data-id="test3"]')

const checkTask = () => {
	if (input.value.length > 0 && task1.style.display !== 'flex') {
		taskValue(task1)
	} else if (task2.style.display !== 'flex' && task1.firstChild.textContent !== input.value) {
		taskValue(task2)
	} else if (
		task3.style.display !== 'flex' &&
		task1.firstChild.textContent !== input.value &&
		task2.firstChild.textContent !== input.value
	) {
		taskValue(task3)
	} else if (task3.style.display == 'flex') {
		errorInfo.textContent = 'Nie możesz dodać czwartego zadania'
		errorInfo.style.color = 'gold'
	} else {
		errorInfo.textContent = 'Nie możesz dodać tego samego zadania'
		errorInfo.style.color = 'tomato'
	}
}

const taskValue = task => {
	task.style.display = 'flex'
	task.firstChild.textContent = input.value
	errorInfo.textContent = ''
	errorInfo.style.color = ''
}

const deleteTask1 = () => {
	task1.style.display = 'none'
	errorInfo.textContent = ''
}
const deleteTask2 = () => {
	task2.style.display = 'none'
	errorInfo.textContent = ''
}
const deleteTask3 = () => {
	task3.style.display = 'none'
	errorInfo.textContent = ''
}
const editTask = () => {
	popup.style.display = 'flex'
}

const popupBtnCancelFunction = () => {
	popup.style.display = 'none'
}

const completeTask1 = () => {
	console.log('siema')
}

c1.addEventListener('click', completeTask1)

editBtnTask1.addEventListener('click', editTask)
editBtnTask2.addEventListener('click', editTask)
editBtnTask3.addEventListener('click', editTask)

btnDeleteTask1.addEventListener('click', deleteTask1)
btnDeleteTask2.addEventListener('click', deleteTask2)
btnDeleteTask3.addEventListener('click', deleteTask3)

btnAddTask.addEventListener('click', checkTask)
popupBtnCancel.addEventListener('click', popupBtnCancelFunction)
