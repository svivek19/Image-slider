const imageEl = [
    '1', '3', '4', '5', '7', '9'
];

const btnEl = document.querySelectorAll('.btn');
const imgDiv = document.querySelector('.img-container');

let count = 0;

btnEl.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('btn-left')) {
            count--
            if (count < 0) {
                count = imageEl.length - 1;
            }
            imgDiv.style.background = `url('images/${imageEl[count]}.jpeg')`
        }
        if (button.classList.contains('btn-right')) {
            count++;
            if (count > imageEl.length - 1) {
                count = 0
            }
            imgDiv.style.background = `url('images/${imageEl[count]}.jpeg')`
        }
    })

})


