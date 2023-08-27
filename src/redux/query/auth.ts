"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAPI = createApi({
	reducerPath: "authAPI",
	baseQuery: fetchBaseQuery({ baseUrl: "/" }),
	endpoints: (builder) => ({
		getLoginUser: builder.mutation<any, any>({
			query: (payload) => ({
				url: payload.url,
				method: "POST",
				body: payload.data,
			}),
		}),
		registerUser: builder.mutation<any, any>({
			query: (payload) => ({
				url: payload.url,
				method: "POST",
				body: payload.data,
			}),
		}),
	}),
});

export const { useGetLoginUserMutation, useRegisterUserMutation } = authAPI
