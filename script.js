const animalButtons = document.querySelectorAll('.big-five-button')
const SAL = document.querySelector("#spotted-animals-list")

const found = animalButtons.forEach(function (element) {
    const found = element
    const addToList = function (element) {
        const newLi = document.createElement("li")
        newLi.classList.add("spotted-animals-list-item")
        newLi.innerHTML = found.innerHTML
        SAL.appendChild(newLi)
    }
    element.addEventListener('click', addToList)
})

const removeFirstButton = document.querySelector("#remove-first-item-button")


const wipeFirst = () => {
    const firstEntry = document.getElementsByClassName('spotted-animals-list-item')[0]
    SAL.removeChild(firstEntry)

}

removeFirstButton.addEventListener('click', wipeFirst)

const removeAllButton = document.querySelector("#remove-all-button")

const wipeAll = () => {
    SAL.innerHTML = " "
}

removeAllButton.addEventListener('click', wipeAll)


