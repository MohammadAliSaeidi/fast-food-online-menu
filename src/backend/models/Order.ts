import { Menu } from "./Menu";
import { OrderItem } from "./OrderItem";
import { OrderStatus } from "./OrderStatus";
import { OrderType } from "./OrderType";
import { User } from "./User";

export type Order = {
	id: number;
	menuId: number;
	userId: number;
	type: OrderType;
	status: OrderStatus;
	totalPrice: number;
	notes?: string;
	createdAt: Date;
	updatedAt?: Date;
	rating?: number;
	ratingComment?: string;
	ratingCreatedAt?: Date;
	ratingUpdatedAt?: Date;
	menu?: Menu;
	user?: User;
	orderItems?: OrderItem[];
};
