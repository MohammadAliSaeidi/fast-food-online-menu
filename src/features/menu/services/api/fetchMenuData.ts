import { axiosInstance } from "@/features/shared/lib/axios";
import { ClientMenuDataDTO } from "../../types/DTO/client/ClientMenuDataDTO";

export const fetchMenuData = async (menuSlug: string) => {
	return await axiosInstance.get<ClientMenuDataDTO>(
		`${
			process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
		}/api/v1/menu/${menuSlug}`
	);
};
