import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
};

export const GeneralState = createSlice({
	name: "general",
	initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
	},
});
export const { setLoading } = GeneralState.actions;
export default GeneralState.reducer;
