"use client";

import { QUERY_KEYS } from "@/features/shared/data/constants";
import { useQuery } from "@tanstack/react-query";
import { fetchMenuData } from "../../services/api/fetchMenuData";

type Props = {
	slug: string;
};

export default function Menu({ slug }: Props) {
	const { data: response, isFetching } = useQuery({
		queryKey: [QUERY_KEYS.MENU],
		queryFn: () => fetchMenuData(slug),
	});

	return <div>{response?.data.name}</div>;
}
