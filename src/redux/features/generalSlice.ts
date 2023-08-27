import { createSlice } from "@reduxjs/toolkit";

interface user {
	email: string;
	name: string;
	_id: string;
	role: string;
}
const initialState = {
	loading: false,
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
		setUser:(state,action) =>{
			state.user = action.payload
		}
	},
});
export const { setLoading,setUser } = GeneralState.actions;
export default GeneralState.reducer;
