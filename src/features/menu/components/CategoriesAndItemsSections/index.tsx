import { ClientCategoryDTO } from "../../types/DTO/client/ClientCategoryDTO";
import CategoryAndItemsSection from "../CategoryAndItemsSection";

type Props = {
	data: ClientCategoryDTO[];
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
