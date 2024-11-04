import { ProductManager } from "./ProductManager.js";
import { Cart } from "./Cart.js";
import { OrderManager } from "./OrderManager.js";
const productManager = new ProductManager();
const cart = new Cart();
const orderManager = new OrderManager();
// Добавление нескольких товаров
productManager.addProduct({ id: 1, name: "MacBook Pro 14", price: 229000, description: "MacBook Pro на 14 дюймов с чипом M4 Pro" });
productManager.addProduct({ id: 2, name: "iPhone 16 Pro", price: 108990, description: "iPhone 16 Pro на 128 Гб" });
productManager.addProduct({ id: 3, name: "AirPods Pro 2", price: 22990, description: "Беспроводные наушники AirPods Pro 2" });
productManager.addProduct({ id: 3, name: "Apple Watch Series 10", price: 43990, description: "Наручные часы Apple Watch Series 10" });
// Список товаров
productManager.showProducts();
// Добавление товары в корзину
cart.addItem(productManager.getProduct(1));
cart.addItem(productManager.getProduct(2));
cart.addItem(productManager.getProduct(3));
cart.removeItem(productManager.getProduct(1));
// Содержимое корзины
cart.showCart();
console.log(`Общая сумма корзины: ${cart.calculateTotal()} руб.`);
// Создание заказа из товаров в корзине
orderManager.createOrder(cart.getItems());
// Обновление статус заказа
orderManager.updateOrderStatus(1, "в обработке");
orderManager.updateOrderStatus(1, "отправлен");
// Демонстрация информации о всех заказах
orderManager.showOrders();
