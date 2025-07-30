import { MenuCategoryDTO } from "../../types/MenuCategoryDTO";
import CategoryAndItemsSection from "../CategoryAndItemsSection";

type Props = {
	data: MenuCategoryDTO[];
};

export default function CategoriesAndItemsSections({ data }: Props) {
	return (
		<div className="flex flex-col gap-6">
			{data.map((category) => (
				<CategoryAndItemsSection key={category.id} data={category} />
			))}
		</div>
	);
}
