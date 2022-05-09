const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const divSquare = document.querySelector('.square')

const dblclick = () => {
    console.log('cześć')
}

const click = () => {
    p1.classList.toggle('show')
    p2.classList.toggle('show')
}

const changeRed = () => {
    divSquare.style.background = 'red'
}

const changeBlue = () => {
    divSquare.style.background = 'blue'
}

divSquare.addEventListener('mousemove', changeRed)
divSquare.addEventListener('mouseleave', changeBlue)
btn1.addEventListener('dblclick', dblclick)
btn2.addEventListener('click', click)