import Counter from "@/features/shared/components/Counter";
import Image from "next/image";
import { ClientMenuItemDTO } from "../../types/DTO/client/ClientMenuItemDTO";

type Props = {
	data: ClientMenuItemDTO;
	onCountChange: (count: number) => void;
	isCounterLoading?: boolean;
};

export default function MenuItem(props: Props) {
	const { data, onCountChange, isCounterLoading } = props;
	return (
		<div className="border border-neutral-400 rounded w-64 p-3 flex flex-col gap-4">
			<div className="w-full h-44">
				{data.imageUrl && <Image src={data.imageUrl} alt={data.name} />}
			</div>
			<h3>{data.name}</h3>
			<p className="line-clamp-3">{data.description}</p>
			<p>
				{/* TODO: calculate off and add line through style to the base price */}
				<span>{data.basePrice.toLocaleString("fa")}</span>{" "}
				{/* TODO: convert currency symbol to custom component */}
				<span aria-hidden="true">تومان</span>
			</p>
			<div className="mr-auto">
				<Counter
					onChange={onCountChange}
					isLoading={isCounterLoading}
				/>
			</div>
		</div>
	);
}
