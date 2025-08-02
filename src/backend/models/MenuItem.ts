import { Category } from "./Category";

export type MenuItem = {
	id: number;
	categoryId: number;
	name: string;
	description?: string;
	basePrice: number;
	createdAt: Date;
	updatedAt?: Date;
	imageUrl?: string;
	imageThumbnailDataUrl?: string;
	isActive: boolean;
	sortPriority?: number;
	itemOptions: ItemOption[];
	category?: Category;
	orderItems: OrderItem[];
};
