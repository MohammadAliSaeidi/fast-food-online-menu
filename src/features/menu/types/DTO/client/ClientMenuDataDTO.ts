import { ClientCategoryDTO } from "./ClientCategoryDTO";

export type ClientMenuDataDTO = {
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
	isActive: boolean;
	categories: ClientCategoryDTO[];
};
