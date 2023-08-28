import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const AuthorizeUser = async (req: NextRequest) => {
	const token: string = req.headers.get("authorization")?.split(" ")[1]!;
	try {
		const extractAuthUserInfo = jwt.verify(token, process.env.SECRET_KEY!);
		if (extractAuthUserInfo) return extractAuthUserInfo;
	} catch (e) {
		console.log(e);
		return false;
	}
};

