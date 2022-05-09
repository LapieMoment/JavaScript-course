const ul = document.createElement('ul')
document.body.append(ul)
const number = 10
let lastLi
for(let i = 1; i <= number; i++){
    const li = document.createElement('li')
    li.textContent = i
    ul.append(li)    
    if(i == 10){
        lastLi = li
        lastLi.textContent = 'Jestem ostatnim elementem.'
    }
}

//lub: const LastiLi = document.querySelector('li:last-child')

lastLi.style.background = 'blue'
lastLi.style.padding = '20px 40px'
lastLi.style.fontSize = '48px'