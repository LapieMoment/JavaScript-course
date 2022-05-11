const input = document.querySelector('.todo-input')
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
const task1 = document.querySelector('[data-id="test1"]')
const task2 = document.querySelector('[data-id="test2"]')
const task3 = document.querySelector('[data-id="test3"]')

//console.log(input.textContent = 'siema');
const checkTask = () => {
	if (input.value.length > 0 && task1.style.display !== 'flex') {
		taskValue(task1)
		console.log(task1.firstChild.textContent);
		console.log(task2.firstChild.textContent);
	} else if (task2.style.display !== 'flex' && task1.firstChild.textContent !== input.value) {
		taskValue(task2)
		
	} else if (task3.style.display !== 'flex' && task3.firstChild.textContent !== task2.firstChild.textContent  && task3.firstChild.textContent !== task1.firstChild.textContent){
		taskValue(task3)
	} else {
		errorInfo.textContent = 'Nie możesz dodać tego samego zadania'
		errorInfo.style.color = 'tomato'
	}
}

const taskValue = (task) => {
			task.style.display = 'flex'
			task.firstChild.textContent = input.value
			errorInfo.textContent = ''
			errorInfo.style.color = ''
}

const deleteTask1 = () => {
	task1.style.display = 'none'
}
const deleteTask2 = () => {
	task2.style.display = 'none'
}
const deleteTask3 = () => {
	task3.style.display = 'none'
}

const editTask1 = () => {
	popup.style.display = 'flex'
}
const editTask2 = () => {
	popup.style.display = 'flex'
}
const editTask3 = () => {
	popup.style.display = 'flex'
}
const popupBtnCancelFunction = () => {
	popup.style.display = 'none'
}

popupBtnCancel.addEventListener('click', popupBtnCancelFunction)

editBtnTask1.addEventListener('click', editTask1)
editBtnTask2.addEventListener('click', editTask2)
editBtnTask3.addEventListener('click', editTask3)

editBtnTask1.addEventListener('click', editTask1)
editBtnTask2.addEventListener('click', editTask2)
editBtnTask3.addEventListener('click', editTask3)

btnDeleteTask1.addEventListener('click', deleteTask1)
btnDeleteTask2.addEventListener('click', deleteTask2)
btnDeleteTask3.addEventListener('click', deleteTask3)

btnAddTask.addEventListener('click', checkTask)
