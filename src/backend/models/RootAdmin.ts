import { AdminRole } from "./AdminRole";
import { RefreshToken } from "./RefreshToken";
import { User } from "./User";

export type RootAdmin = {
	id: number;
	username: string;
	password: string;
	name?: string;
	createdAt: Date;
	updatedAt?: Date;
	role: AdminRole;
	userId: number;
	isActive: boolean;
	RefreshToken: RefreshToken[];
	user: User;
};
