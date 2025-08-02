import { ItemOption } from "./ItemOption";
import { OptionType } from "./OptionType";
import { OptionValue } from "./OptionValue";
import { OrderItemOption } from "./OrderItemOption";

export type Option = {
	id: number;
	name: string;
	type: OptionType;
	createdAt: Date;
	updatedAt?: Date;
	isActive: boolean;
	itemOptions?: ItemOption[];
	optionValues?: OptionValue[];
	orderItemOptions?: OrderItemOption[];
};
