import { MenuDataDTO } from "@/features/menu/types/MenuDataDTO";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) {
	try {
		const { slug } = await params;

		console.log(slug);

		const menuData: MenuDataDTO = {
			name: "پیتزا هیپو",
			categories: [
				{
					id: 1,
					isActive: true,
					items: [
						{
							id: 1,
							basePrice: 100000,
							isActive: true,
							name: "پیتزا مارگاریتا",
							description:
								"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات",
							sortPriority: 1,
						},
					],
					name: "پیتزا ایتالیایی",
					description:
						"پیتزا های ایتالیایی که با مواد مرغوب و ارگانیک درست می شوند",
					sortPriority: 1,
				},
				{
					id: 2,
					isActive: true,
					items: [
						{
							id: 2,
							basePrice: 100000,
							isActive: true,
							name: "پیتزا پپرونی",
							description:
								"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات",
							sortPriority: 1,
						},
					],
					name: "پیتزا آمریکایی",
					description:
						"پیتزا های آمریکایی که با مواد مرغوب و ارگانیک درست می شوند",
					sortPriority: 2,
				},
			],
		};

		return NextResponse.json(menuData);
	} catch {
		return NextResponse.json(
			{ error: "Failed to fetch menu data" },
			{ status: 500 }
		);
	}
}
