const counter = document.querySelector('.counter__number'),
    btns = document.querySelectorAll('.counter__btn');

let count = 0;

//check if value positive or negative and add appropriate class
function checkValue(num) {
    if (num > 0) {
        counter.classList.remove('counter__number_red')
        counter.classList.add('counter__number_green')
    } else if (num < 0) {
        counter.classList.remove('counter__number_green')
        counter.classList.add('counter__number_red')
    } else {
        counter.classList.remove('counter__number_red')
        counter.classList.remove('counter__number_green')
    }
}
//set event listener for btns and check for event target
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if (target.classList.contains('counter__btn_decrease')) {
            count--;
            counter.textContent = count;
            checkValue(count);
        } else if (target.classList.contains('counter__btn_reset')) {
            count = 0;
            checkValue(count)
            counter.textContent = count;
        } else if (target.classList.contains('counter__btn_increase')) {
            count++;
            counter.textContent = count;
            checkValue(count);
        }
    })
})