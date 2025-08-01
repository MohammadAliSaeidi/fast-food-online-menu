import { NextResponse } from "next/server";

export const getServerError = (exceptionError: unknown) => {
	console.error(exceptionError);

	return NextResponse.json(
		{},
		{
			status: 500,
			statusText: "Internal Server Error",
			headers: { "Content-Type": "application/json" },
		}
	);
};
