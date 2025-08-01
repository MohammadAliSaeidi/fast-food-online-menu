import { getServerError } from "@/backend/lib/getServerError";
import MenuRepository from "@/features/menu/services/backend/repositories/customer/MenuRepository";
import { NextResponse } from "next/server";

export const getMenuData = async (slug: string) => {
	try {
		const menuData = await MenuRepository.getMenuData(slug);

		return NextResponse.json(menuData);
	} catch (e) {
		getServerError(e);
	}
};
