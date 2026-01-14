import { createSlice, nanoid } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(product) {
        return {
          payload: {
            ...product,
            id: nanoid(),
          },
        };
      },
    },
    updateProduct(state, action) {
      const index = state.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;
