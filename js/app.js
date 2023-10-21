// Tu código aquí.
let count = 0

btnAdd.addEventListener('click', function () {
    count++
    document.querySelector("#counter").textContent = count
    if (count>0) {
        document.querySelector("#counter").style.color = "green";
    } else if (count<0) {
        document.querySelector("#counter").style.color = "red";
    } else {
        document.querySelector("#counter").style.color = "black";
    }
})

btnLower.addEventListener('click', function(){
    count--
    document.querySelector('#counter').textContent = count
    if (count>0) {
        document.querySelector("#counter").style.color = "green";
    } else if (count<0) {
        document.querySelector("#counter").style.color = "red";
    } else {
        document.querySelector("#counter").style.color = "black";
    }
})

  


