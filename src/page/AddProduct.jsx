import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addAsync } from '../productsR/productSlice';

const AddProduct = () => {
  
  const status = useSelector( (state) => state.product.status );
  const dispatch = useDispatch();


  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);

  const handlesubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('name' , name);
      formData.append('description',description);
      formData.append('quantity',quantity);
      formData.append('price',price);
      formData.append('image',image);

      dispatch( addAsync( formData ) );

      setName("");
      setDescription("");
      setQuantity(0);
      setPrice(0);
      setImage(null);
  }
  return (
    <div className='container mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md max-w-md'>

      <form className='space-y-4' onSubmit={handlesubmit}>
        <label className='block'>
          <span className='text-gray-700'>  name :  </span>
          <input
            className='w-[90%] h-10 p-2 rounded-xl mt-2'
            type="text"
            name='name'
            disabled = { status === "loading" }
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </label>

        <label className='block'>
          <span className='text-gray-700'>    Description :   </span>

          <textarea
            className='w-[90%] h-40 p-2 rounded-xl mt-2'
            type="text"
            name='description'
            value={description}
            disabled = { status === "loading" }
            onChange={(e) => setDescription(e.target.value)} />
        </label>

        <label className='block'>
          <span className='text-gray-700'>    Quantity : </span>

          <input
            className='w-[90%] h-10 p-2 rounded-xl mt-2'
            type="number"
            name='quantity'
            value={quantity}
            disabled = { status === "loading" }
            onChange={(e) => setQuantity(e.target.value)} />
        </label>

        <label className='block'>
          <span className='text-gray-700'>   Price : </span>

          <input
            className='w-[90%] h-10 p-2 rounded-xl mt-2'
            type="number"
            name='price'
            disabled = { status === "loading" }
            value={price}
            onChange={(e) => setPrice(e.target.value)} />
        </label>

        <label className='block'>
          <span className='text-gray-700'>  Image :   </span>

          <input
            className='w-[90%] h-10 p-2 rounded-xl mt-2'
            type="file"
            name='image'
            accept="image/*"
            disabled = { status === "loading" }
            onChange={(e) => setImage(e.target.files[0])} />
        </label>

        <button 
        type='submit'
        disabled = { status === "loading" }
        className='p-2 bg-yellow-400 rounded-xl text-center mx-auto w-full'>
            upload
        </button>


      </form>

    </div>
  )
}

export default AddProduct
