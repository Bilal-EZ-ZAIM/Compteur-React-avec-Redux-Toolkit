import { createSlice } from "@reduxjs/toolkit";

// Initial state
// État initial
const initialState = {
  name: "bilal",
  age: 24,
  phone: "0648096712",
};

// Create the slice
// Création de la slice
const userSlice = createSlice({
  name: "userSlice", // Slice name
  initialState,
  reducers: {
    changeName: (state) => {
      state.name = "zaim"; // Increment counter
      // Incrémenter le compteur
    },
  },
});

// Export actions
// Exporter les actions
export const { changeName } = userSlice.actions;

// Export reducer
// Exporter le réducteur
export default userSlice.reducer;
