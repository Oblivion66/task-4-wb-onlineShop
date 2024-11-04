export class OrderManager {
    constructor() {
        this.orders = [];
        this.currentOrderId = 1;
    }
    // Метод для создания нового заказа
    createOrder(products) {
        const total = products.reduce((sum, product) => sum + product.price, 0);
        const newOrder = {
            id: this.currentOrderId++,
            items: products,
            total,
            status: "новый",
        };
        this.orders.push(newOrder);
        console.log(`\nЗаказ с ID ${newOrder.id} создан. Общая сумма: ${newOrder.total} руб.`);
    }
    // Метод для смены статуса заказа
    updateOrderStatus(orderId, status) {
        const order = this.orders.find((o) => o.id === orderId);
        if (order) {
            order.status = status;
            console.log(`Статус заказа с ID ${orderId} обновлен на "${status}".`);
        }
        else {
            console.log(`Заказ с ID ${orderId} не найден.`);
        }
    }
    // Метод для отображения информации о всех заказах
    showOrders() {
        console.log("\nСписок заказов:");
        this.orders.forEach((order) => {
            console.log(`ID: ${order.id}, Статус: ${order.status}, Сумма: ${order.total} руб.`);
        });
    }
}
