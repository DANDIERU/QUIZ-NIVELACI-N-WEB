
const randomWord = document.querySelector(".random-word")
const tries = document.querySelector(".tries")
const mistakes = document.querySelector(".mistakes")
const randomButton = document.querySelector(".random-button")
const putLettersContainer = document.querySelector(".putletters-container")
const resetButton = document.querySelector(".reset-button")

const words = [
    "flower",
    "apple",
    "banana",
    "computer",
    "commit"
]

const inputs = []

randomButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * words.length)
    chooseWord = words[randomIndex]
    trasnformedWord = chooseWord.split("").reverse().join("")
    randomWord.textContent = trasnformedWord
    numberOfLetters = chooseWord.length
    console.log(numberOfLetters)
    putLettersContainer.innerHTML =""

    for (let i = 0; i < numberOfLetters; i++) {        
        const newContent = document.createElement("input")
        newContent.maxLength = 1
        putLettersContainer.appendChild(newContent)
        inputs.push(newContent)
        console.log(inputs)
        
    }
    
})

resetButton.addEventListener("click", () => {
    inputs.forEach((item) =>{
        item.value = ""
    })
    
})

