import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
	return <div className="p-4">{children}</div>;
}
