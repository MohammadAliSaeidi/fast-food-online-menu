import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

export type Category = {
	id: number;
	menuId: number;
	name: string;
	description?: string;
	createdAt: Date;
	updatedAt?: Date;
	isActive: boolean;
	sortPriority: number;
	menu?: Menu;
	menuItems: MenuItem[];
};
