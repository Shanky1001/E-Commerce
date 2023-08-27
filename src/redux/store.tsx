import { configureStore } from "@reduxjs/toolkit";
import { DialogBoxSlice } from "./features/dialogSlice";
import { GeneralState } from "./features/generalSlice";
import { authAPI } from "./query/auth";

export const store = configureStore({
	reducer: {
		general: GeneralState.reducer,
		dialogBox: DialogBoxSlice.reducer,
		[authAPI.reducerPath]: authAPI.reducer,
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
