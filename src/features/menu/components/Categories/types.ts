import { ClientCategoryDTO } from "../../types/DTO/client/ClientCategoryDTO";

export type Props = {
	data?: ClientCategoryDTO[];
	onCategoryClick?: (
		category: Pick<ClientCategoryDTO, "id" | "isActive" | "name">
	) => void;
	selectedCategory?: ClientCategoryDTO;
};
