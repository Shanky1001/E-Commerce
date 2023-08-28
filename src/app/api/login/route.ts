import { Connect } from "@/config/dbConfig";
import User from "@/models/userModel";
import { compare } from "bcryptjs";
import Joi from "joi";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const schema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().alphanum().min(6).required(),
});

export const POST = async (req: NextRequest) => {
	await Connect();

	const { email, password } = await req.json();

	const { error } = schema.validate({ email, password });

	if (error) {
		return NextResponse.json({
			success: false,
			message: error.details[0].message,
		});
	}

	try {
		const checkUser = await User.findOne({ email });
		if (!checkUser) {
			return NextResponse.json({
				success: false,
				message: "Account not found with this email",
			});
		}

		const checkPassword = await compare(password, checkUser.password);
		if (!checkPassword) {
			return NextResponse.json({
				success: false,
				message: "Incorrect password. Please try again !",
			});
		}

		const token = jwt.sign(
			{
				id: checkUser._id,
				email: checkUser?.email,
				role: checkUser?.role,
			},
			process.env.SECRET_KEY!,
			{ expiresIn: "1d" }
		);

		const finalData = {
			token,
			user: {
				email: checkUser.email,
				name: checkUser.name,
				_id: checkUser._id,
				role: checkUser.role,
			},
		};
		const response = NextResponse.json({
			success: true,
			message: "Login successfull!",
			data: finalData,
		});
		response.cookies.set("token", token, { httpOnly: true });
		return response;
	} catch (e: any) {
		console.log("Error while logging In. Please try again");

		return NextResponse.json(
			{
				success: false,
				message: "Something went wrong ! Please try again later",
			},
			{ status: 500 }
		);
	}
};
