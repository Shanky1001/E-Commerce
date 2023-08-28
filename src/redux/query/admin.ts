"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const prepareHeaders = (headers: any) => {
	const token = Cookies.get("token");
	headers.set("content-type", "application/json");
	if (token) {
		headers.set("authorization", `Bearer ${token}`);
	}
	return headers;
};
export const adminAPI = createApi({
	reducerPath: "adminAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: "/",
		prepareHeaders: (headers) => prepareHeaders(headers),
		jsonContentType: "application/json",
	}),
	endpoints: (builder) => ({
		getAllOrders: builder.query<any, any>({
			query: (url) => ({
				url: `${url}`,
			}),
		}),
		updateOrders: builder.mutation<any, any>({
			query: (payload) => ({
				url: payload.url,
				method: "POST",
				body: payload.data,
			}),
		}),
	}),
});

export const { useGetAllOrdersQuery, useUpdateOrdersMutation } = adminAPI;
