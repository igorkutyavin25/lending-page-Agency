// Нахожу узлы(селекторы),обращаюсь к ним.
const burgerMenu = document.querySelector('.header__burger-btn');
const burgerList = document.querySelector('.header');
// Вешаю прослушиватель событий по клику
burgerMenu.addEventListener('click', mobileBurger);
// Создаю функцию,в которой обращаюсь к класслисту.где по клику перезаписывается класс
function mobileBurger() {
    burgerList.classList.toggle('open');
}
// Нахожу узел,обращаюсь к нему
const goUpBtn = document.querySelector(".go-up");
// Вешаю на окно просмотра прослушиватель событий по скролу
window.addEventListener("scroll", trackScroll);
// Вешаю прослушиватель событий по клику
goUpBtn.addEventListener("click", goUp);
// Пишу функцию ,в которой обознаю две константы,первая смотрит на окно по Y,другая ищет в документе 
// клиентскую высоту.И если при выполнении условия, добавляется новый класс, если нет ,то класс удаляется
function trackScroll() {
    const scrolled = window.pageYOffset;

    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        goUpBtn.classList.add("go-up_show");
    }
    else {
        goUpBtn.classList.remove("go-up_show");
    }
}

function goUp() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -75);
        setTimeout(goUp, 0);
    }
}
