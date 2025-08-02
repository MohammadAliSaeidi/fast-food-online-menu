import { ItemOption } from "./ItemOption";

export type ItemOptionValue = {
	id: number;
	itemOptionId: number;
	optionValueId: number;
	isActive: boolean;
	extraPrice: number;
	itemOption?: ItemOption;
	optionValue?: OptionValue;
	orderItemOptions?: OrderItemOption[];
};
