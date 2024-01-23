const colorDisplayEl = document.getElementById('display')
const redEl = document.getElementById('red')
const greenEl = document.getElementById('green')
const blueEl = document.getElementById('blue')
const buttonEl = document.getElementById('button')




function updateColor() {
    let r = redEl.value
    let g = greenEl.value
    let b = blueEl.value

    const color = 'rgb(' + r + ',' + g + ',' + b + ')'

    colorDisplayEl.style.backgroundColor = color
    
}

buttonEl.addEventListener('click', updateColor)