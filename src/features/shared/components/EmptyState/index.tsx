import { cn } from "../../lib/utils/cn";
import { MessageType } from "./type";
import { getMessage } from "./utils";

type Props = {
	message: MessageType;
	className?: string;
};

export default function EmptyState(props: Props) {
	const { message, className } = props;

	return (
		<div
			className={cn(
				"text-muted-foreground w-full flex-1 text-wrap p-6 text-center text-xs",
				className
			)}
			role="alert"
			aria-live="assertive"
		>
			{getMessage(message)}
		</div>
	);
}
