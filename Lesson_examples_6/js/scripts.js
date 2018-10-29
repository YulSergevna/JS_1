/**
 * Обработка событий
 */

let willBeClicked = document.querySelector(".willBeClicked");
willBeClicked.onclick = function() {
    alert("Кликнули на willBeClicked");
}

function willBeClickedAgain() {
    alert("Кликнули на willBeClicked еще раз");
}

let testInClick = document.querySelector(".testInClick");
testInClick.onclick = function() {
    alert("Кликнули на testInClick");
    willBeClicked.onclick = willBeClickedAgain;
}

//addEventListener и removeEventListener
let firstLi = document.querySelector("ul li:first-child");
//firstLi.removeEventListener("click", firstLiClick);

function firstLiClick() {
    firstLi.removeEventListener("click", firstLiClick);
    firstLi.addEventListener("click", firstLiClick2);
    alert("firstLi clicked first time");
}
function firstLiClick2() {
    firstLi.removeEventListener("click", firstLiClick2);
    firstLi.addEventListener("click", firstLiClick);
    alert("firstLi clicked first time again");
}
firstLi.addEventListener("click", firstLiClick);

/**
 * Слайдер/галерея
 */
let loopInterval;   //Глобальный loop указатель
let loopCount = 0;  //Счетчик смены картинок
let timer = 2000;   //Таймер переключения картинок
let bad_img = "img/fuckupnights.png";

/* Первая версия без перехвата loopCount
function loopPics(images) {
    let picTarget = {
        target: images[loopCount]
    };
    changeBigPicture(picTarget);
    loopCount++;
    if (loopCount == images.length) {
        loopCount = 0;
    }
}

function init() {
    let images = document.querySelectorAll(".slider_pics img");
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", changeBigPicture);
    }
    loopInterval = setInterval(loopPics, timer, images);
}

function changeBigPicture(event) {
    //console.log(event);
    let appBigPic = document.getElementById("big_picture");
    let clickedElement = event.target;
    //console.log(clickedElement);
    let src = clickedElement.getAttribute("src");
    console.log(src);
    appBigPic.src = src;
}*/

//2 версия с перехватом loopCount
function loopPics(images) {
    changeBigPicture(loopCount, images[loopCount].src);
    loopCount++;
    if (loopCount == images.length) {
        loopCount = 0;
    }
}

function init() {
    let images = document.querySelectorAll(".slider_pics img");
    let arrows = document.querySelectorAll(".slider_arrow");
    for (let i = 0; i < arrows.length; i++) {
        arrows[i].addEventListener("click", function () {
            let direct = this.classList.contains('left') ? -1 : 1;
            let num_img = 0;
            /* если положение на нуле и шаг отрицательный, устанавливаем последнюю картинку,
                если положение на последней картинке и шаг положительный, устанавливаем первую картинку,
                в остальных случаях устанавливаем loopCount + direct картинку
             */
            if (loopCount == 0 && direct < 0) {
                num_img = images.length - 1;
            } else if (loopCount == images.length - 1 && direct > 0) {
                num_img = 0;
            } else {
                num_img = loopCount + direct;
            }
            changeBigPicture(num_img, images[num_img].src);
        });
    };
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function() {
            changeBigPicture(i, images[i].src);
        });
    }
    loopInterval = setInterval(loopPics, timer, images);
}

function changeBigPicture(index, src) {
    let appBigPic = document.getElementById("big_picture");
    appBigPic.src = src;
    appBigPic.onerror = function() {
        appBigPic.src = bad_img;
    }
    loopCount = index;
}


window.onload = init;