import { ClientMenuItemDTO } from "./ClientMenuItemDTO";

export type ClientOrderItemDTO = {
	id: number;
	orderId: number;
	itemId: number;
	quantity: number;
	itemPrice: number;
	item: ClientMenuItemDTO;
	orderItemOptions: OrderItemOption[];
};
