import prisma from "@/backend/lib/prisma";
import { NotFoundError } from "@/backend/types/errors/NotFoundError";
import { ClientMenuDataDTO } from "@/features/menu/types/DTO/client/ClientMenuDataDTO";
import { ClientMenuItemDTO } from "@/features/menu/types/DTO/client/ClientMenuItemDTO";
import { ClientOptionValueDTO } from "@/features/menu/types/DTO/client/ClientOptionValueDTO";

const MenuRepository = {
	getMenuData: async (slug: string): Promise<ClientMenuDataDTO> => {
		const menuData = await prisma.menu.findFirst({
			where: { slug: slug },
			select: {
				createdAt: true,
				slogan: true,
				name: true,
				slug: true,
				address: true,
				headerPhotoThumbnailDataUrl: true,
				headerPhotoUrl: true,
				logoUrl: true,
				phone: true,
				rating: true,
				description: true,
				isActive: true,
				categories: {
					select: {
						id: true,
						name: true,
						description: true,
						isActive: true,
						sortPriority: true,
						menuItems: {
							select: {
								id: true,
								name: true,
								description: true,
								basePrice: true,
								imageUrl: true,
								imageThumbnailDataUrl: true,
								isActive: true,
								sortPriority: true,
								itemOptions: {
									select: {
										id: true,
										isActive: true,
										isRequired: true,
										itemOptionValue: {
											select: {
												extraPrice: true,
												id: true,
												optionValue: {
													select: {
														id: true,
														isActive: true,
														value: true,
													},
												},
											},
										},
										option: {
											select: {
												id: true,
												isActive: true,
												name: true,
												type: true,
											},
										},
									},
								},
							},
						},
					},
				},
			},
		});

		if (!menuData)
			throw new NotFoundError(
				`cafe with the given slug ${slug} not found`
			);

		return {
			name: menuData.name,
			createdAt: menuData.createdAt,
			isActive: menuData.isActive,
			slug: menuData.slug,
			address: menuData.address ?? undefined,
			description: menuData.description ?? undefined,
			headerPhotoThumbnailDataUrl:
				menuData.headerPhotoThumbnailDataUrl ?? undefined,
			headerPhotoUrl: menuData.headerPhotoUrl ?? undefined,
			logoUrl: menuData.logoUrl ?? undefined,
			phone: menuData.phone ?? undefined,
			rating: menuData.rating ?? undefined,
			slogan: menuData.slogan ?? undefined,
			categories: menuData.categories.map((cat) => ({
				id: cat.id,
				isActive: cat.isActive,
				name: cat.name,
				sortPriority: cat.sortPriority,
				description: cat.description ?? undefined,
				menuItems: cat.menuItems.map(
					(item): ClientMenuItemDTO => ({
						basePrice: item.basePrice,
						id: item.id,
						isActive: item.isActive,
						name: item.name,
						options: item.itemOptions.map((itemOption) => ({
							id: itemOption.id,
							isActive:
								itemOption.option.isActive &&
								itemOption.isActive,
							name: itemOption.option.name,
							type: itemOption.option.type,
							optionValues: itemOption.itemOptionValue.map(
								(itemOptionValue): ClientOptionValueDTO => ({
									id: itemOptionValue.id,
									extraPrice: itemOptionValue.extraPrice,
									isActive:
										itemOptionValue.optionValue.isActive &&
										itemOption.isActive,
									value: itemOptionValue.optionValue.value,
								})
							),
						})),
					})
				),
			})),
		};
	},
};

export default MenuRepository;
