import { getMenuData } from "@/features/menu/services/backend/controller/customer/getMenuData";
import { NextResponse } from "next/server";

export async function GET(
	_: unknown,
	{ params }: { params: Promise<{ slug: string }> }
) {
	try {
		const { slug } = await params;

		return getMenuData(slug);
	} catch {
		return NextResponse.json(
			{ error: "Failed to fetch menu data" },
			{ status: 500 }
		);
	}
}
