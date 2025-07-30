import { MenuItem } from "./MenuItem";

export interface MenuCategory {
	id: number;
	name: string;
	description?: string;
	isActive: boolean;
	sortPriority?: number;
	createdAt: Date;
	updatedAt?: Date;
	items: MenuItem[];
}
