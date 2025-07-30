import { MenuCategory } from "@/features/shared/types/MenuCategory";

export type MenuCategoryComponentType = Omit<
	MenuCategory,
	"updatedAt" | "items" | "createdAt" | "description" | "sortPriority"
>;

export type Props = {
	data: MenuCategoryComponentType;
	isSelected?: boolean;
	onClick?: (category: MenuCategoryComponentType) => void;
};
