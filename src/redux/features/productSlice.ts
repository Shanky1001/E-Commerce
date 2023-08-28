import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [],
	addresses: [],
	allOrders: [],
	orderDetails: null,
};

export const ProductSlice = createSlice({
	name: "productSlice",
	initialState,
	reducers: {
		setCartItems: (state, action) => {
			state.cartItems = action.payload;
		},
		setAddresses: (state, action) => {
			state.addresses = action.payload;
		},
		setAllOrders: (state, action) => {
			state.allOrders = action.payload;
		},
		setOrderDetails: (state, action) => {
			state.orderDetails = action.payload;
		},
	},
});

export const { setAddresses, setCartItems, setAllOrders, setOrderDetails } =
	ProductSlice.actions;
export default ProductSlice.reducer;
