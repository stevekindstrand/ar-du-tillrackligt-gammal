let age = document.getElementById("age")

let pElement = document.createElement("p")
document.body.append(pElement)

let btn = document.getElementById("btn")
btn.addEventListener("click", function() {
    if (age.value > 0 && age.value < 18) {
        pElement.innerText = "Du är för ung!"
    } else if (age.value >= 18 && age.value < 65) {
        pElement.innerText = "Du är tillräckligt gammal!"
    } else if (age.value >= 65) {
        pElement.innerText = "Du är för gammal, gå och lägg dig!"
    }
})