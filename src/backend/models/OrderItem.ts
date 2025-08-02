import { MenuItem } from "./MenuItem";
import { Order } from "./Order";
import { OrderItemOption } from "./OrderItemOption";

export type OrderItem = {
	id: number;
	orderId: number;
	itemId: number;
	quantity: number;
	itemPrice: number;
	createdAt: Date;
	updatedAt?: Date | null;
	item?: MenuItem;
	order?: Order;
	orderItemOptions?: OrderItemOption[];
};
