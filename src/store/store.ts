import { configureStore } from '@reduxjs/toolkit';
import { userAPI } from '../services/usersAPI';

const store = configureStore({
    reducer: {
      [userAPI.reducerPath]: userAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userAPI.middleware),
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export default store;