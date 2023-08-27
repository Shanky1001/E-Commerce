import { configureStore } from "@reduxjs/toolkit";
import { DialogBoxSlice } from "./features/dialogSlice";
import { GeneralState } from "./features/generalSlice";

export const store = configureStore({
	reducer: {
		general: GeneralState.reducer,
		dialogBox: DialogBoxSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
