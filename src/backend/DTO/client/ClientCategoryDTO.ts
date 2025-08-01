export type ClientCategoryDTO = {
	name: string;
	description?: string;
	isActive: boolean;
	sortPriority: number;
	menuItems: MenuItem[];
};
