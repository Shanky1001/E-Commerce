import { AuthorizeUser } from "@/app/api/helpers";
import { Connect } from "@/config/dbConfig";
import Order from "@/models/orderModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
	await Connect();
	try {
		const authUser: any = await AuthorizeUser(req);
		if (authUser?.role === "admin") {
			const getAllOrders = await Order.find({})
				.populate("orderItems.product")
				.populate("user");
			if (getAllOrders) {
				return NextResponse.json({
					success: true,
					data: getAllOrders,
				});
			} else {
				return NextResponse.json({
					success: false,
					message:
						"failed to fetch the orders ! Please try again after some time.",
				});
			}
		} else {
			return NextResponse.json({
				success: false,
				message: "You are not authorized to view !",
			});
		}
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			success: false,
			message: "Something went wrong ! Please try again later",
		});
	}
};
