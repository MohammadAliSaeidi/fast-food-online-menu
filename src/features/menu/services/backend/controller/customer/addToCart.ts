import { getServerError } from "@/backend/lib/getServerError";
import { NextResponse } from "next/server";
import { CustomerOrdersRepository } from "../../repositories/customer/CustomerOrdersRepository";

export const addToCart = async (slug: string) => {
	try {
		const newOrderData = await CustomerOrdersRepository.getMenuData(slug);

		return NextResponse.json(menuData);
	} catch (e) {
		getServerError(e);
	}
};
