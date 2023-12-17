const button = document.getElementById('button')
const text = document.getElementById('text')

function changeSize(size) {
    return () => {
        text.style.fontSize = size
    }
}
button.addEventListener('click', () => {
    const sizechange = changeSize('5px')
    sizechange();
})