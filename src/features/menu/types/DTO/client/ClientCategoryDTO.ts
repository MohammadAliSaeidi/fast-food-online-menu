import { ClientMenuItemDTO } from "./ClientMenuItemDTO";

export type ClientCategoryDTO = {
	id: number;
	name: string;
	description?: string;
	isActive: boolean;
	sortPriority: number;
	menuItems: ClientMenuItemDTO[];
};
