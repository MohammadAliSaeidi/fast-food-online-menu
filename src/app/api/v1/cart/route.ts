import { getServerError } from "@/backend/lib/getServerError";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	try {
	} catch (e: unknown) {
		getServerError(e);
	}
}
