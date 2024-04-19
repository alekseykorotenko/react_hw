import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialValue = {
  pizzas: [],
  items: [],
  totalPrice: 0,
  totalItems: 0,
  isLoading: false,
  error: null
};

export const fetchAllPizzas = createAsyncThunk('pizza/fetchAllPizzas', async () => {
  try {
    const response = await fetch('https://react-fast-pizza-api.onrender.com/api/menu');

    if (!response.ok) throw new Error('Something went wrong');

    const { data } = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
});

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: initialValue,
  reducers: {
    addToCard: (state, action) => {
      const existedItem = state.items.find((item) => item.id === action.payload.id);

      if (!existedItem) {
        state.items.push({ ...action.payload, qty: 1 });
      } else {
        existedItem.qty = existedItem.qty + 1;
      }
    },
    removeFromCard: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increment: (state, action) => {
      const existedItem = state.items.find((item) => item.id === action.payload.id);
      existedItem.qty = existedItem.qty + 1;
    },
    decrement: (state, action) => {
      const existedItem = state.items.find((item) => item.id === action.payload.id);
      if (existedItem.qty > 1) {
        existedItem.qty = existedItem.qty - 1;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllPizzas.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });

    builder.addCase(fetchAllPizzas.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pizzas = action.payload;
    });

    builder.addCase(fetchAllPizzas.rejected, (state) => {
      state.error = 'fetch error';
      state.pizzas = action.payload;
    });
  }
});

export default pizzaSlice.reducer;
export const { addToCard, removeFromCard, increment, decrement } = pizzaSlice.actions;
