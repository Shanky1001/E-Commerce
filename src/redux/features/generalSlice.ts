import { createSlice } from "@reduxjs/toolkit";

interface user {
	email: string;
	name: string;
	_id: string;
	role: string;
}
const initialState = {
	loading: false,
	loading_id: "",
	user: {
		email: "",
		name: "",
		_id: "",
		role: "",
	},
};

export const GeneralState = createSlice({
	name: "general",
	initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setLoadingId: (state, action) => {
			state.loading_id = action.payload;
		},
		setUser: (state, action) => {
			state.user = action.payload;
		},
		resetUser: (state) => {
			state.user = {
				email: "",
				name: "",
				_id: "",
				role: "",
			};
		},
	},
});
export const { setLoading, setLoadingId, setUser, resetUser } =
	GeneralState.actions;
export default GeneralState.reducer;
