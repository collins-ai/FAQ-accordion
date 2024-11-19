const inputs = document.querySelectorAll(`input`)
let show = false

const showAnswer = (e) => {
    if(show == false) {
        e.target.nextElementSibling.style.display = `block`
        show = true
    }else{
        e.target.nextElementSibling.style.display = `none`
        show = false
    }
}

inputs.forEach((input) => {
    input.style.paddingRight = `5.7rem`
    input.addEventListener(`click`, showAnswer)
})