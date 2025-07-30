"use client";

import EmptyState from "@/features/shared/components/EmptyState";
import Loading from "@/features/shared/components/Loading";
import { QUERY_KEYS } from "@/features/shared/data/constants";
import { useQuery } from "@tanstack/react-query";
import useCategories from "../../hooks/useCategories";
import { fetchMenuData } from "../../services/api/fetchMenuData";
import Categories from "../Categories";
import CategoriesAndItemsSections from "../CategoriesAndItemsSections";

type Props = {
	slug: string;
};

export default function Menu({ slug }: Props) {
	const {
		data: response,
		isFetching,
		isError,
		isSuccess,
	} = useQuery({
		queryKey: [QUERY_KEYS.MENU],
		queryFn: () => fetchMenuData(slug),
	});

	const renderLoading = () => {
		return isFetching && <Loading />;
	};

	const renderError = () => {
		return isError && <EmptyState message="fetchingError" />;
	};

	const { handleSelectCategory, selectedCategory } = useCategories();

	return (
		<div>
			{renderLoading()}
			{renderError()}
			{isSuccess && (
				<>
					{response?.data.name}
					<Categories
						selectedCategory={selectedCategory}
						data={response?.data.categories}
						onCategoryClick={handleSelectCategory}
					/>
					<CategoriesAndItemsSections
						data={response?.data.categories}
					/>
				</>
			)}
		</div>
	);
}
