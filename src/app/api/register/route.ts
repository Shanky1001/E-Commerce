import { Connect } from "@/config/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Joi from "joi";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

const schema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().alphanum().min(6).required(),
	role: Joi.string().required(),
});

export const POST = async (req: NextRequest) => {
	await Connect();
	const { name, email, password, role } = await req.json();
	const { error } = schema.validate({ name, email, password, role });
	if (error) {
		return NextResponse.json({
			success: false,
			message: error.details[0].message,
		});
	}

	try {
		//check if the user is exists or not
		const isUserExists = await User.findOne({ email });
		if (isUserExists) {
			return NextResponse.json({
				success: false,
				message:
					"User is already exists. Please try with different email.",
			});
		} else {
            // Create hashed password
            const salt = await bcryptjs.genSalt(10);
			const hashPassword = await bcryptjs.hash(password, salt);
            // Create User
			const newlyCreatedUser = await User.create({
				name,
				email,
				password: hashPassword,
				role,
			});

			if (newlyCreatedUser) {
				return NextResponse.json({
					success: true,
					message: "Account created successfully.",
				});
			}
		}
	} catch (error) {
		console.log("Error while new user registration. Please try again");

		return NextResponse.json({
			success: false,
			message: "Something went wrong ! Please try again later",
		});
	}
};
