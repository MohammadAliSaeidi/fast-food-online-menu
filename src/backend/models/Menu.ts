import { Admin } from "./Admin";
import { Category } from "./Category";
import { Order } from "./Order";
import { User } from "./User";

export type Menu = {
	id: number;
	ownerId: number;
	name: string;
	slug: string;
	logoUrl?: string;
	headerPhotoUrl?: string;
	headerPhotoThumbnailDataUrl?: string;
	description?: string;
	slogan?: string;
	address?: string;
	phone?: string;
	rating?: number;
	createdAt: Date;
	updatedAt?: Date;
	isActive: boolean;
	Admin?: Admin[];
	owner?: User;
	categories: Category[];
	orders?: Order[];
};
