import { MenuItemDTO } from "./MenuItemDTO";

export interface MenuCategoryDTO {
	id: number;
	name: string;
	description?: string;
	sortPriority?: number;
	isActive: boolean;
	items: MenuItemDTO[];
}
