import { configureStore } from "@reduxjs/toolkit"; 
import productReducer from "../productsR/productSlice";
import cartReducer from "../cardR/cardSlice"
export const store = configureStore( {
     reducer : {
        product : productReducer,
        cart:cartReducer
     }
} )