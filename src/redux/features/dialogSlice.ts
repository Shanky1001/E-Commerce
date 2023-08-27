import { createSlice } from "@reduxjs/toolkit";
import { MouseEventHandler, ReactNode } from "react";
interface dialogBox {
	open: boolean;
	title: string;
	content?: string | ReactNode;
	primaryBtnText: string;
	secondaryBtnText?: string;
	primaryAction: MouseEventHandler<HTMLButtonElement>;
	secondaryAction?: MouseEventHandler<HTMLButtonElement>;
}
const initialState: dialogBox = {
	open: false,
	title: "",
	content: "",
	primaryBtnText: "",
	secondaryBtnText: "",
	primaryAction: () => {},
	secondaryAction: () => {},
};

export const DialogBoxSlice = createSlice({
	name: "dialogBox",
	initialState,
	reducers: {
		openDialogBox: (state, action) => {
			const {
				title,
				content,
				primaryAction,
				primaryBtnText,
				secondaryAction,
				secondaryBtnText,
			} = action.payload;
			state = {
				open: true,
				title: title,
				primaryBtnText: primaryBtnText,
				primaryAction: primaryAction,
				content: content,
				secondaryBtnText: secondaryBtnText,
				secondaryAction: secondaryAction,
			};
		},
		closeDialogBox: (state) => {
			state.open = false;
		},
	},
});

export const { openDialogBox, closeDialogBox } = DialogBoxSlice.actions;
export default DialogBoxSlice.reducer;
