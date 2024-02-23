import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsync } from '../productsR/productSlice';
import ProductComponent from '../components/productComponent';
import { fetchAsyncCart } from '../cardR/cardSlice';

const Home = () => {

    const dispatch = useDispatch();
    const allProducts = useSelector( (state) => state.product.products );
    const status = useSelector( (state) => state.product.status );
    useEffect( () => {
        dispatch( fetchAsync() );
        console.log("all product" , allProducts )
    } ,[])

    if( status === "loading" )
    {
      return <div
       className='h-screen w-screen flex items-center justify-center'
      >
        LOADING...
      </div>
    }
   
  return (
    
    <div className='w-[90%] mx-auto justify-center flex flex-wrap' >
        
      {
         allProducts.map( ( product , index ) => ( <ProductComponent 
                                                
                                                    id = {product._id} 
                                                    description = { product.description } 
                                                    price = { product.price } 
                                                    name = {product.name}
                                     image = {product.image}  /> ) )
      }

   

    </div>
  )
}

export default Home
