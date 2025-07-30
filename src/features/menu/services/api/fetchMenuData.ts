import { axiosInstance } from "@/features/shared/lib/axios";
import { MenuDataDTO } from "../../types/MenuDataDTO";

export const fetchMenuData = async (menuSlug: string) => {
	return await axiosInstance.get<MenuDataDTO>(
		`${
			process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
		}/api/v1/menu/${menuSlug}`
	);
};
