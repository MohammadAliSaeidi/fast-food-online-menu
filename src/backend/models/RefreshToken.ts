import { Admin } from "./Admin";
import { RootAdmin } from "./RootAdmin";
import { User } from "./User";

export type RefreshToken = {
	id: number;
	token: string;
	userId?: number;
	rootAdminId?: number;
	adminId?: number;
	expiresAt: Date;
	createdAt: Date;
	admin?: Admin;
	rootAdmin?: RootAdmin;
	user?: User;
};
