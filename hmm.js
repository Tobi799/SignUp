const subtract = document.getElementById('decrement');
const add = document.getElementById('increment');
let text = document.querySelector(".counter-value");
let counter = 0;

add.addEventListener('click', function () {
    counter-value++;
    text.innerHTML = counter-value;
});

subtract.addEventListener('click', function () {

    if (count == 0) {
        count = 0;
    }else {
        counter-value--;
        text.innerHTML = counter-value;
    }
});