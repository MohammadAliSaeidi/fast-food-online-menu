import { User } from "./User";

export interface OtpCode {
	id: number;
	userId: number;
	code: string;
	expiresAt: Date;
	createdAt: Date;
	user?: User;
}
