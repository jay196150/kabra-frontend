import { createAsyncThunk , createSlice } from "@reduxjs/toolkit"; 
import { fetchCartProduct , addCartProduct , decrCartProductQut , deletCartProduct , incrCartProductQut } from "./cardApi"; 
import toast, { Toaster } from 'react-hot-toast';

const initialState = {
    items :[],
    states:"ok",
    fetchstatus : "ok"
};

export const fetchAsyncCart = createAsyncThunk(
    'cart/fetchItems',
    async () => {
        const data = await fetchCartProduct();
        console.log(data.data);
        return data.data.data;
    }
);

export const addAsync = createAsyncThunk(
    'cart/addItem',
    async ( cartProduct ) =>{
       const data = await addCartProduct(cartProduct);
       return data.data;
    }
);

export const incAsync = createAsyncThunk(
    'cart/increItem',
    async( id ) => {
        console.log("id", id)
        const data = await incrCartProductQut(id);
        return data.data;
    }
)

export const decAsync = createAsyncThunk(
    'cart/decItem',
    async( id ) => {
        const data = await decrCartProductQut(id);
        return data.data;
    }
)

export const deleteAsync = createAsyncThunk(
    'cart/deleteItem',
    async(id) => {
       
        const data = await deletCartProduct(id);
        console.log( "data" , data );
        return data.data;
    }
)

export const cartSlice = createSlice( {
    name : "cart",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder.
        addCase( fetchAsyncCart.pending , (state) => {
            state.fetchstatus = "loading"
        } )
        .addCase( fetchAsyncCart.fulfilled , (state , action)=>{
            state.fetchstatus = "ok";
            console.log("CART DATA");
            if(action.payload === undefined){
                state.items = [];
            }else{
                state.items = action.payload;
            }
           
        } )
        .addCase( fetchAsyncCart.rejected , (state) => {
            state.fetchstatus = "ok"
        } )
        .addCase(addAsync.fulfilled , (state , action)=>{
            state.states = "ok";
            toast.success("add into cart")
            state.items.push( action.payload.data );
        })
        .addCase(addAsync.pending , (state) => {
            state.states = "loading"
        } )
        .addCase(addAsync.rejected , (state) => {
            state.states = "ok";
            toast.error("ERROR");
        } )
        .addCase( incAsync.fulfilled , (state , action) => {
            state.states = "ok";
            if( action.payload.data !== "no" ){
            toast.success("increase")    
            const index = state.items.findIndex( item => item.cartProduct._id === action.payload.data );
            state.items[index].quantity++;
            }
        } )
        .addCase( incAsync.pending , (state) => {
            state.states = "loading"
        } )
        .addCase( decAsync.fulfilled , (state , action)=>{
            state.states = "ok";
            if( action.payload.data !== "no" ){
            const index = state.items.findIndex( item => item.cartProduct._id === action.payload.data );
            toast.success("decrease")   
            state.items[index].quantity-- ;
            }
        } )
        .addCase(decAsync.pending , (state) => {
            state.states = "loading"
        })
        .addCase( deleteAsync.fulfilled , (state , action) => {
            state.states = "ok";
            if( action.payload.data !== "no" ){
            const index = state.items.findIndex( item => item.cartProduct._id === action.payload.data );
            toast.success("delete")
            state.items.splice(index,1);
            }
        } )
        .addCase( deleteAsync.rejected, (state) => {
            toast.error("error");
            state.states = "ok";
        } )
        .addCase( deleteAsync.pending , (state) => {
           state.states = "loading"
        } )

    }
} )

export default cartSlice.reducer;