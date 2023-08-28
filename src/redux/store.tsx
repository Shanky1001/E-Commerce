import { configureStore } from "@reduxjs/toolkit";
import { DialogBoxSlice } from "./features/dialogSlice";
import { GeneralState } from "./features/generalSlice";
import { ProductSlice } from "./features/productSlice";
import { adminAPI } from "./query/admin";
import { authAPI } from "./query/auth";

export const store = configureStore({
	reducer: {
		general: GeneralState.reducer,
		dialogBox: DialogBoxSlice.reducer,
		product: ProductSlice.reducer,
		[authAPI.reducerPath]: authAPI.reducer,
		[adminAPI.reducerPath]: adminAPI.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authAPI.middleware, adminAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
