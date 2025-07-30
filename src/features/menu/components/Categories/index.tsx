import Category from "../Category";
import { Props } from "./types";

export default function Categories(props: Props) {
	const { data, onCategoryClick, selectedCategory } = props;

	return (
		<div className="flex flex-nowrap gap-2">
			{data?.map((category) => (
				<Category
					isSelected={category.id === selectedCategory?.id}
					key={category.id}
					data={{
						id: category.id,
						isActive: category.isActive,
						name: category.name,
					}}
					onClick={onCategoryClick}
				/>
			))}
		</div>
	);
}
