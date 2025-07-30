import { useState } from "react";
import { MenuCategoryComponentType } from "../components/Category/types";

const useCategories = () => {
	const [selectedCategory, setSelectedCategory] =
		useState<MenuCategoryComponentType>();

	const handleSelectCategory = (category: MenuCategoryComponentType) => {
		setSelectedCategory(category);
	};

	return { selectedCategory, handleSelectCategory };
};

export default useCategories;
