import { ClientCategoryDTO } from "../../types/DTO/client/ClientCategoryDTO";

export type Props = {
	data: Pick<ClientCategoryDTO, "id" | "isActive" | "name">;
	isSelected?: boolean;
	onClick?: (
		category: Pick<ClientCategoryDTO, "id" | "isActive" | "name">
	) => void;
};
