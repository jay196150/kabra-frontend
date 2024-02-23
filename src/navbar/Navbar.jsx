import React, { useEffect } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncCart } from '../cardR/cardSlice';



const Navbar = () => {

    const allCartProduct = useSelector( (state) => state.cart.items );
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch( fetchAsyncCart() );
        
    } , [] )

    return (
        <div className=' w-screen h-20 border-b-2 border-black flex justify-between items-center px-14 '>

            <Link to="/">   <p className='text-3xl text-black font-semibold'>J-SHOP</p> </Link>

            <div className='flex gap-6 items-center'>
                <Link to="/addProduct">
                    <div className='bg-yellow-300 rounded-md p-3 border border-black '>
                        ADD PRODUCT
                    </div>
                </Link>
                <Link to="/cart ">
                    <div className='relative'>
                        <div className='rounded-full bg-yellow-300 absolute p-1 mr-0 mt-0'>
                            { allCartProduct ? allCartProduct.length : "0" }
                           
                        </div>
                        <CiShoppingCart size={48} />
                    </div>
                </Link>
            </div>


        </div>
    )
}

export default Navbar
