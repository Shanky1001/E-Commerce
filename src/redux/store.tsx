import { configureStore } from "@reduxjs/toolkit";
import { DialogBoxSlice } from "./features/dialog";

export const store = configureStore({
	reducer: {
		dialogBox: DialogBoxSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
