let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let container = count + " - "
    saveEl.textContent = saveEl.textContent += container
    console.log(count)
    count = 0
    countEl.innerText = count
}