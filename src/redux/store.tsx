import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";
import { authApi } from "./api/authApi";
import { categoriesApi } from "./api/categoriesApi";
import imageReducer from './imageSlice'

 const store = configureStore({
    reducer: { 
      // cart: cartReducer,
      [authApi.reducerPath]: authApi.reducer,
      [categoriesApi.reducerPath]: categoriesApi.reducer,
      avatar: imageReducer,
    },
    middleware: (getDefaultMiddleware) =>{
      return  getDefaultMiddleware().concat(authApi.middleware, categoriesApi.middleware);
     },
  });

  export default store;

  type RootState = ReturnType<typeof store.getState>;
  // export const selectcartItems = (state:RootState) => state.cart.cartItems;
  // export const selectTotalAmount = (state:RootState) => state.cart.cartTotalAmount;
  // export const selectcartTotalQuantity = (state:RootState) => state.cart.cartTotalQuantity;
  export const selectimgAvatar = (state:RootState) => state.avatar.image;