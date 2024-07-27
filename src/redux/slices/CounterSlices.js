import { createSlice } from "@reduxjs/toolkit";

// Initial state
// État initial
const initialState = {
  counter: 1, // Counter value
  name: "counters", // Name of the slice
};

// Create the slice
// Création de la slice
const counterSlice = createSlice({
  name: "counterSlice", // Slice name
  initialState,
  reducers: {
    addOne: (state , action) => {
        console.log(action);
      state.counter += 1; // Increment counter
      // Incrémenter le compteur
    },
    minusOne: (state) => {
      state.counter -= 1; // Decrement counter
      // Décrémenter le compteur
    },
    changeCounter: (state , action) => {
        state.counter = action.payload
      },
  },
});

// Export actions
// Exporter les actions
export const { addOne, minusOne  , changeCounter} = counterSlice.actions;

// Export reducer
// Exporter le réducteur
export default counterSlice.reducer;
