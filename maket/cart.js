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
console.log(myCart);

myCart.add(new Product('Лампа', 100, 'l001', 1));
myCart.add(new Product('Ковер', 1500, 'k001', 1));
myCart.add(new Product('Тумбочка', 2300, 't001', 1));
console.log(myCart.price());
