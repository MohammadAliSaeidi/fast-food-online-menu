import { useState } from "react";
import Loading from "../Loading";

type Props = {
	onChange?: (value: number) => void;
	defaultValue?: number;
	max?: number;
	isLoading?: boolean;
	disabled?: boolean;
};

export default function Counter(props: Props) {
	const { onChange, defaultValue, max, disabled, isLoading } = props;
	const [count, setCount] = useState<number>(defaultValue ?? 0);

	const handleIncrease = () => {
		if (count === max) return;

		const newValue = count + 1;
		setCount(newValue);
		onChange?.(newValue);
	};

	const handleDecrease = () => {
		if (count === 0) return;

		const newValue = count - 1;
		setCount(newValue);
		onChange?.(newValue);
	};
	return (
		<div className="flex flex-nowrap gap-2 items-center w-fit">
			<button
				className="w-10 h-10 bg-indigo-600 rounded text-white"
				onClick={() => handleIncrease()}
				disabled={isLoading || disabled}
			>
				+
			</button>
			{isLoading ? <Loading /> : count}
			<button
				className="w-10 h-10 bg-indigo-600 rounded text-white"
				onClick={() => handleDecrease()}
				disabled={isLoading || disabled}
			>
				-
			</button>
		</div>
	);
}
