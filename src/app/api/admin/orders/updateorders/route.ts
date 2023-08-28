import { AuthorizeUser } from "@/app/api/helpers";
import { Connect } from "@/config/dbConfig";
import Order from "@/models/orderModel";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest) => {
	await Connect();
	try {
		const authUser: any = await AuthorizeUser(req);
		if (authUser?.role === "admin") {
			const data = await req.json();
			const {
				_id,
				shippingAddress,
				orderItems,
				paymentMethod,
				isPaid,
				paidAt,
				isProcessing,
			} = data;
			const updatedOrder = await Order.findOneAndUpdate(
				{ _id: _id },
				{
					shippingAddress,
					orderItems,
					paymentMethod,
					isPaid,
					paidAt,
					isProcessing,
				},
				{ new: true }
			);
			if (updatedOrder) {
				return NextResponse.json({
					success: true,
					message: "Order updated successfully! ",
				});
			} else {
				return NextResponse.json({
					success: true,
					message: "failed to update the order",
				});
			}
		} else {
			return NextResponse.json({
				success: false,
				message: "You are not authorized!!",
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
