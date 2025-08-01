import { ClientCategoryDTO } from "../../types/DTO/client/ClientCategoryDTO";
import MenuItem from "../MenuItem";

type Props = {
	data: ClientCategoryDTO;
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
				{data.menuItems.map((item) => (
					<li role="listitem" key={item.id}>
						<MenuItem onCountChange={() => {}} data={item} />
					</li>
				))}
			</ul>
		</section>
	);
}
