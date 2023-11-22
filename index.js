// var for input of minutes
let minutes = document.getElementById('min').value
//var for output convertd into seconds
let display = document.getElementById('sec')
//var for button to begin function
let btn = document.getElementById('btn1')
// function that converts minutes to seconds
function minToSec() {
    minutes = document.getElementById('min').value
    let answer = minutes * 60
    display.value = answer.toFixed(2)
    console.log(answer.toFixed(2));
}
btn.addEventListener('click',minToSec)