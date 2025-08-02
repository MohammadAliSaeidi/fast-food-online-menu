import { ItemOptionValue } from "./ItemOptionValue";
import { Option } from "./Option";
import { OrderItemOption } from "./OrderItemOption";

export type OptionValue = {
	id: number;
	optionId: number;
	value: string;
	createdAt: Date;
	updatedAt?: Date | null;
	isActive: boolean;
	itemOptionValue?: ItemOptionValue[];
	option?: Option;
	orderItemOptions?: OrderItemOption[];
};
