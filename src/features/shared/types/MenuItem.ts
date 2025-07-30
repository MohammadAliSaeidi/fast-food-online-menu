export interface MenuItem {
	id: number;
	name: string;
	description?: string;
	basePrice: number;
	imageUrl?: string;
	imageThumbnailDataUrl?: string;
	isActive: boolean;
	sortPriority?: number;
	createdAt: Date;
	updatedAt?: Date;
}
