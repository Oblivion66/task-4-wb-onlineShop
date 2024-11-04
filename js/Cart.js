export class Cart {
    constructor() {
        this.items = [];
    }
    // Метод для добавления товара в корзину
    addItem(product) {
        this.items.push(product);
        console.log(`Товар "${product.name}" добавлен в корзину.`);
    }
    // Метод для удаления товара из корзины по ID
    removeItem(product) {
        this.items = this.items.filter((item) => item.id !== product.id);
        console.log(`Товар: ${product.name} удален из корзины.`);
    }
    // Метод для получения всех товаров в корзине
    showCart() {
        console.log("\nСодержимое корзины:");
        this.items.forEach((item) => {
            console.log(`ID: ${item.id}, Название: ${item.name}, Цена: ${item.price} руб.`);
        });
    }
    // Метод для расчета общей стоимости корзины
    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
    // Получение всех товаров в корзине
    getItems() {
        return this.items;
    }
}
