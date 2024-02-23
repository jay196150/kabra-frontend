import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import {addProduct, fetchProduct} from "./productApi"
import toast from "react-hot-toast";

const initialState = { 
    products : [],
    status : "ok"
};

export const fetchAsync = createAsyncThunk(
    'product/fetchProduct',
    async () => {
        const data = await fetchProduct();
        console.log( data.data.data );
        return data.data.data;
    }
);

export const addAsync = createAsyncThunk(
    'product/addProduct',
    async (formData) => {
        const data = await addProduct(formData);
        return data.data.data;
    }
)

export const productSlice = createSlice( {
    name:"products",
    initialState,
    reducers:{

    },
    extraReducers : (builder) => {
        builder
        .addCase( fetchAsync.pending , (state) => { 
            state.status = "loading"
        })
        .addCase( fetchAsync.fulfilled , (state , action)=>{
            state.status = "ok";
            state.products = action.payload;
        } )
        .addCase(fetchAsync.rejected , (state )=>{
            toast.error("Error");
            state.status = "ok";
        })
        .addCase(addAsync.pending , (state) => {
            state.status = "loading";
        } )
        .addCase(addAsync.fulfilled , (state , action) => {
            toast.success("Add")
            state.status = "ok";
            state.products.push( action.payload ); 
        } )
        .addCase( addAsync.rejected , (state , action) => {
            toast.error(action.error);
            state.status = "ok";
        } )
    }
} );

export default productSlice.reducer;