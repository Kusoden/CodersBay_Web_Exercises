let services = []
let prices = []
let washEl = document.getElementById("wash-el")
let mowEl = document.getElementById("mow-el")
let pullEl = document.getElementById("pull-el")
let totalAmount = document.getElementById("totalAmount")
let priceForTotalAmount = 0
const taskContainerEl = document.getElementById("task-container")

function washCar() {
    services.push("wash car")
    prices.push(10)
    priceForTotalAmount = priceForTotalAmount + 10
    renderInvoice()
    washEl.disabled = true
    totalAmountPrint()
    /*     // possible use 
            for (let i; i <prices.length; i++) {
                   totalAmount 
            
            } */
}

function mowLawn() {
    services.push("mow lawn")
    prices.push(20)
    priceForTotalAmount = priceForTotalAmount + 20
    renderInvoice()
    mowEl.disabled = true
    totalAmountPrint()
}

function pullWeeds() {
    services.push("pull weeds")
    prices.push(30)
    priceForTotalAmount = priceForTotalAmount + 30
    renderInvoice()
    pullEl.disabled = true
    totalAmountPrint()
}


function renderInvoice() {
    let taskList = ""
    for (let i = 0; i < services.length; i++) {
        taskList += `
        <div>
        <div class="rem">
        <p>${services[i]}</p>
        <button onclick="removingButton(${i})">remove</button>
        </div>
        <p>$${prices[i]}</p>
        </div>
        `
    }
    taskContainerEl.innerHTML = taskList
}

function removingButton(index) {
    let temp = prices.splice(index, 1)
    services.splice(index, 1)

        priceForTotalAmount -= temp

    if(! prices.includes(10))
        washEl.disabled = false
    if(! prices.includes(20))
        mowEl.disabled = false
    if(! prices.includes(30))
        pullEl.disabled = false
    renderInvoice()
    totalAmountPrint()
}



function resetbut() {
    for (let i = 0; i <= services.length + 1; i++) {
        prices.pop()
        services.pop()
    }
    washEl.disabled = false
    mowEl.disabled = false
    pullEl.disabled = false
    priceForTotalAmount = 0
    totalAmount.textContent = "$"+priceForTotalAmount
    renderInvoice()
}

function totalAmountPrint(){
    totalAmount.textContent = "$"+priceForTotalAmount
}
