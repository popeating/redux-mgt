import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalValue: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.totalValue += parseFloat(action.payload.price);
      state.totalItems += 1;
    },
    removeFromCart: (state, action) => {
      console.log(action);
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(itemIndex);
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      if (itemIndex >= 0) {
        const item = state.cart[itemIndex];
        console.log('...', item);
        state.totalValue -=
          parseFloat(action.payload.price) * action.payload.quantity;
        state.totalItems -= action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
