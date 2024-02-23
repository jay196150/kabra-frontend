import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { decAsync, deleteAsync, incAsync } from '../cardR/cardSlice';


const Cart = () => {

  const allCardProduct = useSelector( (state) => state.cart.items );
  const fetchstatus = useSelector( (state) => state.cart.fetchstatus );
  const status = useSelector( (state) => state.cart.states );
  const dispatch = useDispatch();

  console.log("in cart",allCardProduct);

  if( fetchstatus === "loading" )
    {
      return <div
       className='h-screen w-screen flex items-center justify-center'
      >
        LOADING...
      </div>
    }
  return (
    <div className="w-[90%] mx-auto flex">
      <div className='w-[60%] m-2'>
         
      { allCardProduct.length != 0 ? allCardProduct.map( (product , index) => (
           <div className='w-[90%] h-36 m-2 border flex border-black rounded-lg items-center' >
           <div className='w-[30%] bg-black h-[100%] rounded-lg '>
            <img src={`https://raw.githubusercontent.com/jay196150/kabra-backend/main/${ product.cartProduct.image }`} alt="" className=' object-fill h-[100%] w-[100%] rounded-lg'  />
           </div>
           <div className='w-[70%] flex mx-auto'>

             <div className='flex flex-col items-center w-[40%] mx-auto'>
                 <p className='p-2 max-w-[90%] font-bold overflow-hidden ' >{product.cartProduct.name}</p>
                 <p className='p-2  max-w-[90%] text-xl text-yellow-400'>{product.cartProduct.price}</p>
             </div>

             <div className='flex flex-col items-center w-[40%] mx-auto'>
                 <button className='bg-yellow-300 p-1 rounded-md w-32 text-center cursor-pointer ' onClick={ () => dispatch(incAsync(product.cartProduct._id)) }  > + </button>
                 <div> {product.quantity} </div>
                 <div className='bg-yellow-300 p-1 rounded-md w-32 text-center cursor-pointer ' onClick={ () => dispatch(decAsync(product.cartProduct._id)) } > - </div>
             </div>

             <button 
             disabled = { status === "loading" }
             className='flex items-center w-[20%] mx-auto cursor-pointer' onClick={ ()=> dispatch(deleteAsync(product.cartProduct._id)) }>
             <MdDelete size={32} />
             </button>

           </div>
      </div>
      ) ) : <div className='h-screen w-screen flex justify-center items-center'> no item in cart </div> }
      </div>

{allCardProduct.length !== 0  ?
        <div className='w-[40%] h-full ml-[60%] fixed p-4 m-2'>
        <div className='flex flex-col'>
          <p className='text-xl text-black'>TOTAL ITEMS : {  allCardProduct.length  }</p>
          <br />
          
          <h1 className='text-2xl text-black'> TOTAL RS : { allCardProduct.reduce( (acc,item) => item.cartProduct.price * item.quantity + acc , 0)  } </h1>
        </div>
      </div> : <></>
}
    </div>
  )
}

export default Cart
