import { OrderItem } from "./OrderItem";

export type OrderItemOption = {
	id: number;
	orderItemId: number;
	optionId: number;
	extraPrice: number;
	createdAt: Date;
	updatedAt?: Date;
	itemOptionValueId: number;
	optionValueId?: number;
	value?: ItemOptionValue;
	option?: Option;
	optionValue?: OptionValue;
	orderItem?: OrderItem;
};
