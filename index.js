// document.getElementById("count-el").innerText = 5

// let count = 0

// console.log(count)

// let myAge = 34
// console.log(myAge)

// let lapsCompleted = 0

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)


// // function increment() {
// //     console.log(42)
// // }

let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")


function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count -= count
    countEl.innerText = 0
    console.log(count)
}



