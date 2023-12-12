
function checkForm(form) {
    function removeError(input) {
        const parent = input.parentNode;

        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }
    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('error-label')
        errorLabel.textContent = text

        parent.classList.add('error')

        parent.append(errorLabel)
    }
    let result = true;
    const allInputs = form.querySelectorAll('input');
    for (const input of allInputs) {
        removeError(input)
        if (input.dataset.minLength) {
            if (input.value.length < input.dataset.minLength){
                removeError(input)
                createError(input, `Минимальное количество символов: 2 ${input.dataset.minLength}`)
                result = false
            }
        }
        if (input.dataset.required == "true") {
            if (input.value == "") {
                removeError(input)
                createError(input, 'Полне не заполнено:(')
                result = false
            }
        }
    }
    return result
}

let images = document.querySelectorAll('.slider-img');
let controlls = document.querySelectorAll('.controlls');

let imgIndex = 0;

function show(index) {
    images[imgIndex].classList.remove("active");
    images[index].classList.add("active");
    imgIndex = index;
}

controlls.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        if (arrow.classList.contains("left-arrow")) {
            let index = imgIndex - 1;

            if (index < 0) {
                index = images.length - 1;
            }

            show(index);
            
        }
        else if (arrow.classList.contains("right-arrow")) {
            let index = imgIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    })
})

show(imgIndex);