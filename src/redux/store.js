
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/CounterSlices';
import UserSlices from './slices/UserSlices';
// import counterReducer from './features/counter/counterSlice'; // Assurez-vous d'avoir un réducteur

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: UserSlices,
  },
});

export default store;
