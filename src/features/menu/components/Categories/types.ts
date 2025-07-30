import { MenuCategory } from "@/features/shared/types/MenuCategory";
import { MenuCategoryComponentType } from "../Category/types";

export type MenuCategoriesComponentType = Omit<
	MenuCategory,
	"updatedAt" | "items" | "createdAt" | "description"
>;

export type Props = {
	data?: MenuCategoriesComponentType[];
	onCategoryClick?: (category: MenuCategoryComponentType) => void;
	selectedCategory?: MenuCategoryComponentType;
};
