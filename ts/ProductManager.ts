import { Product } from "./interfaces.js";

export class ProductManager {
  private products: Product[] = [];

  // Метод для добавления нового продукта
  addProduct(product: Product): void {
    this.products.push(product);
    console.log(`Товар "${product.name}" добавлен в каталог.`);
  }

  // Метод для удаления продукта по ID
  removeProduct(id: number): void {
    this.products = this.products.filter((p) => p.id !== id);
    console.log(`Товар с ID ${id} удален из каталога.`);
  }

  // Метод для отображения информации о всех продуктах
  showProducts(): void {
    console.log("\nСписок товаров:");
    this.products.forEach((p) => {
      console.log(`ID: ${p.id}, Название: ${p.name}, Цена: ${p.price} руб.`);
    });
  }

  // Получение продукта по ID
  getProduct(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }
}
