import Menu from "@/features/menu/components/Menu";
import { fetchMenuData } from "@/features/menu/services/api/fetchMenuData";
import { QUERY_KEYS } from "@/features/shared/data/constants";
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";

type Params = {
	params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Params) {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: [QUERY_KEYS.MENU],
		queryFn: () => fetchMenuData(slug),
	});

	const { slug } = await params;

	if (slug === undefined || slug === null) {
		return null;
	}

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Menu slug={slug} />
		</HydrationBoundary>
	);
}
