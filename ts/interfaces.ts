// Интерфейс для продукта
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

// Интерфейс для заказа
export interface Order {
  id: number;
  items: Product[];
  total: number;
  status: "новый" | "в обработке" | "отправлен" | "доставлен";
}
