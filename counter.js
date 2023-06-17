const subtract = document.getElementById('sub');
const add = document.getElementById('add');
let text = document.querySelector(".count");
let count = 0;

add.addEventListener('click', function () {
    count++;
    text.innerHTML = count;
    console.log(count);
});

subtract.addEventListener('click', function () {

    if (count == 0) {
        count = 0;
    }else {
        count--;
        text.innerHTML = count;
    }
});