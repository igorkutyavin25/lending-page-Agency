// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('burger').addEventListener('click', function () {
//         document.querySelector('header').classList.toggle('open')
//     })
// });


let burgerMenu = document.querySelector('.header__burger-btn');
let burgerList = document.querySelector('.header');

burgerMenu.addEventListener('click', mobileBurger);

function mobileBurger() {
    burgerList.classList.toggle('open');
}