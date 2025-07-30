import { cn } from "@/features/shared/lib/utils/cn";
import { Props } from "./types";

export default function Category(props: Props) {
	const { data, isSelected, onClick } = props;

	const { id, isActive, name } = data;

	return (
		<button
			onClick={() => onClick?.(data)}
			key={id}
			disabled={!isActive}
			className={cn(isSelected && "bg-indigo-600", "px-4 py-2 rounded")}
		>
			<div>{name}</div>
		</button>
	);
}
