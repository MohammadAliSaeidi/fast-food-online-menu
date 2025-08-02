import { AdminRole } from "./AdminRole";
import { Menu } from "./Menu";
import { RefreshToken } from "./RefreshToken";

export type Admin = {
	id: number;
	username: string;
	password: string;
	name?: string;
	role: AdminRole;
	createdAt: Date;
	updatedAt?: Date;
	menuId: number;
	isActive: boolean;
	menu?: Menu;
	RefreshToken: RefreshToken[];
};
