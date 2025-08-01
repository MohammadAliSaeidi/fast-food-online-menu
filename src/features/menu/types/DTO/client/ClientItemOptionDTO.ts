import { ClientOptionValueDTO } from "./ClientOptionValueDTO";

export type ClientItemOption = {
	id: number;
	name: string;
	type: "SINGLE" | "MULTIPLE";
	isActive: boolean;
	optionValues: ClientOptionValueDTO[];
};
