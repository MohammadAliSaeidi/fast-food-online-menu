import prisma from "@/backend/lib/prisma";

export const CustomerOrdersRepository = {
	addToCart: async (itemId: number, userId: number, menuId: number) => {
		let draftOrder;

		draftOrder = await prisma.order.findFirst({
			where: {
				status: "DRAFT",
			},
		});

		if (!draftOrder)
			draftOrder = await prisma.order.create({
				data: {
					menuId,
					status: "DRAFT",
					totalPrice: 0,
					userId,
				},
			});
		else {
			const updated = await prisma.order.update({
				where: { id: draftOrder.id },
				data: {},
			});
		}
	},
};
