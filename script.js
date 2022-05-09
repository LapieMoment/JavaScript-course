const add = document.querySelector('.add')
const remove = document.querySelector('.remove')
const toggle = document.querySelector('.toggle')
const text = document.querySelector('p')

const addFunction = () => {
    text.classList.add('test')
}

const removeFunction = () => {
    text.classList.remove('test')
}

const toggleFunction = () => {
    text.classList.toggle('test')
}

add.addEventListener('click', addFunction)
remove.addEventListener('click', removeFunction)
toggle.addEventListener('click', toggleFunction)