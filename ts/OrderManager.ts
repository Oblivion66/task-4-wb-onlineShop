import { Order, Product } from "./interfaces.js";

export class OrderManager {
  private orders: Order[] = [];
  private currentOrderId = 1;

  // Метод для создания нового заказа
  createOrder(products: Product[]): void {
    const total = products.reduce((sum, product) => sum + product.price, 0);
    const newOrder: Order = {
      id: this.currentOrderId++,
      items: products,
      total,
      status: "новый",
    };
    this.orders.push(newOrder);
    console.log(`\nЗаказ с ID ${newOrder.id} создан. Общая сумма: ${newOrder.total} руб.`);
  }

  // Метод для смены статуса заказа
  updateOrderStatus(orderId: number, status: "новый" | "в обработке" | "отправлен" | "доставлен"): void {
    const order = this.orders.find((o) => o.id === orderId);
    if (order) {
      order.status = status;
      console.log(`Статус заказа с ID ${orderId} обновлен на "${status}".`);
    } else {
      console.log(`Заказ с ID ${orderId} не найден.`);
    }
  }

  // Метод для отображения информации о всех заказах
  showOrders(): void {
    console.log("\nСписок заказов:");
    this.orders.forEach((order) => {
      console.log(`ID: ${order.id}, Статус: ${order.status}, Сумма: ${order.total} руб.`);
    });
  }
}
