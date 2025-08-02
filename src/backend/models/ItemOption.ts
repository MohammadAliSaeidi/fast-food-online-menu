import { Option } from "@/generated/prisma";
import { ItemOptionValue } from "./ItemOptionValue";
import { MenuItem } from "./MenuItem";

export type ItemOption = {
	id: number;
	itemId: number;
	optionId: number;
	isRequired: boolean;
	createdAt: Date;
	updatedAt?: Date | null;
	isActive: boolean;
	item?: MenuItem;
	option?: Option;
	itemOptionValue?: ItemOptionValue[];
};
