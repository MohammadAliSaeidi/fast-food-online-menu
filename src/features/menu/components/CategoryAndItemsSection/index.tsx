import { MenuCategoryDTO } from "../../types/MenuCategoryDTO";
import MenuItem from "../MenuItem";

type Props = {
	data: MenuCategoryDTO;
};
export default function CategoryAndItemsSection(props: Props) {
	const { data } = props;
	const categoryHeadingId = `category-heading-${data.id}`;

	return (
		<section
			aria-describedby={categoryHeadingId}
			className="flex flex-col gap-4"
		>
			<h2 id={categoryHeadingId}>{data.name}</h2>
			<p>{}</p>
			<ul role="list" className="overflow-x-auto">
				{data.items.map((item) => (
					<li role="listitem" key={item.id}>
						<MenuItem data={item} />
					</li>
				))}
			</ul>
		</section>
	);
}
