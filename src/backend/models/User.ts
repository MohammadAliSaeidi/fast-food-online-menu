import { Menu } from "./Menu";

export type User = {
	id: number;
	phone: string;
	password: string;
	name?: string;
	createdAt: Date;
	updatedAt?: Date;
	isActive: boolean;
	cafes?: Menu[];
	orders: Order[];
	OtpCode: OtpCode[];
	RefreshToken: RefreshToken[];
	RootAdmin?: RootAdmin;
};
