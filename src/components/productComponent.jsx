import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addAsync } from '../cardR/cardSlice';

const ProductComponent = ( {id , image, name , description , price } ) => {

  const dispatch = useDispatch();
  const allCartProduct = useSelector( (state) => state.cart.items );

  const status = useSelector( (state) => state.cart.states );
  

  const cartProduct = id
  return (
    <div className='h-[330px] w-[275px] border border-black rounded-lg m-2'>

    <div className='w-full h-[52%] rounded-lg'>
        <img src={`https://raw.githubusercontent.com/jay196150/kabra-backend/main/${image}`} alt="" className='h-[100%] w-full object-fill rounded-lg'  />
    </div>

    <div className='px-3 py-1'>
        <p className='text-lg line-clamp-1 overflow-hidden text-black'>{name}</p>
        <p className='text-sm line-clamp-1 text-black overflow-hidden opacity-80'> {description} </p>
        <p className='text-lg text-yellow-400' >price : {price}</p>
       
        

        <button 
        disabled = { status === "loading" || allCartProduct && allCartProduct.some( (ele) => ele.cartProduct._id === id )  }
        className={`w-[100%] mx-auto flex items-center justify-center p-2 mt-1  rounded-lg border border-black ${ allCartProduct && allCartProduct.some( (ele) => ele.cartProduct._id === id ) ?"bg-white" : "bg-yellow-400"}  `}
        onClick={ () => { 
          console.log(status ,  "status" )
          dispatch( addAsync( cartProduct ) )} }
        >
             {  allCartProduct && allCartProduct.some( (ele) => ele.cartProduct._id === id ) ? "item into cart" : " add to cart " }
        </button>
    </div>

  </div>
  )
}

export default ProductComponent;
