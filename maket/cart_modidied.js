/**
 * Объект отражающий сущность: продукт
 * @param name
 * @param price
 * @param art
 * @param cnt
 * @constructor
 */
function Product(name, price, art, cnt) {
    this.name = name;
    this.price = price;
    this.art = art;
    this.cnt = cnt;
}

/**
 * Объект отражающий сущность: корзина
 * Умеет складывать Product и считать суммарную стоимость товаров
 * @constructor
 */
function Cart() {
    let self = this;
    this.products = [];
    this.add = function(product){
        //Нужно создать ассоциативный массив
        //Нужно увеличивать количество товара, если такой уже есть
        self.products.push(product);
    };
    this.price = function() {
        let sum = 0;
        for (let i = 0; i < self.products.length; i += 1) {
            sum = sum + +self.products[i].price ;
        }
        return sum;
    }
}

let myCart = new Cart();

/**
 * Добавляет продукт в список продуктов на странице
 * @param Product продукт
 * @param n порядковый номер продукта в корзине
 */
function addProductToList(Product, n) {
    //Создаем лист с продуктами
    let cart = document.getElementsByClassName("cart_list")[0];
    let div = document.createElement("div");
    div.className = "product_list";

    //Порядковый номер продукта (n)
    let list_num = document.createElement("div");
    list_num.className = "list_num";
    list_num.innerHTML = n;
    div.append(list_num);

    //Имя продукта
    let list_name = document.createElement("div");
    list_name.className = "list_name";
    list_name.innerHTML = Product.name;
    div.append(list_name);

    //Стоимость продукта
    let list_cost = document.createElement("div");
    list_cost.className = "list_cost";
    div.append(list_cost);
    list_cost.innerHTML = Product.price;

    //Кнопка удалить
    let list_del = document.createElement("div");
    list_del.className = "list_del";
    list_del.innerHTML = "удалить";
    //Устанавливаем событие для кнопки удалить
    list_del.addEventListener("click", function () {
        let del = this.parentNode;
        del.getElementsByClassName("list_num")[0].innerHTML;
        //Удаляем ПРОДУКТ из корзины по его порядковому номеру
        myCart.products.splice(myCart.products.indexOf(+del.getElementsByClassName("list_num")[0].innerHTML - 1), 1);
        //Полностью перерисовываем корзину, заного выводим весь список
        cartRerender();
        //Обновляем стоимость и количество товаров в корзине на странице
        cartRefresh();
        //Удаляем текущий элемент из списка на странице
        del.remove();
    });
    div.append(list_del);
    cart.append(div);
}

/**
 * обновляем стоимость корзины и количество товаров в блоке "корзина на сайте"
 */
function cartRefresh() {
    document.getElementById("cart_count").innerHTML = myCart.products.length;
    document.getElementById("cart_cost").innerHTML = myCart.price();
}

/**
 * Перерисовываем корзину на странице
 */
function cartRerender() {
    let cart = document.getElementsByClassName("cart_list")[0];
    cart.innerHTML = "";
    for (let i = 0; i < myCart.products.length; i += 1) {
        addProductToList(myCart.products[i], i + 1);
    }
}

/**
 * Инициализация работы корзины
 */
function init() {
    //Навешиваем событие на все кнопки "Купить"
    let buy = document.querySelectorAll(".buy");
    for (let i = 0; i < buy.length; i += 1) {
        buy[i].addEventListener("click", function () {
            let el = buy[i]; // конкретная кнопка
            while (el.classList.contains('card') == false) {
                el = el.parentNode; // ищем родительскую карточку
            }
            // В родительской карточке получаем все параметры
            let code = el.getElementsByClassName("code");
            let name = el.getElementsByTagName("h2");
            let cost = el.getElementsByClassName("cost");
            //Создаем новый продукт с найденными параметрами
            let P = new Product(name[0].innerHTML, +cost[0].innerHTML, code[0].innerHTML, 1);
            //Добавляем новый продукт в корзину
            myCart.add(P);
            //Обновляем значение цена и количество в блоке "Корзина" на странице
            cartRefresh();
            //Добавляем продукт в список продуктов в блоке "корзина" на странице
            addProductToList(P, myCart.products.length);
        })
    }
}

init();


