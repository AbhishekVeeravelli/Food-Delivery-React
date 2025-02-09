import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state here(Directly modifying the state)
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //OriginalState={items:["pizza"]}
    clearCart: (state, action) => {
      //RTK either mutate the exisisting state or return a new state
      //state.items.length = 0; //originalState=[]
      return { items: [] }; //this new[] will be replaced inside the original state={ items: [] }
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
