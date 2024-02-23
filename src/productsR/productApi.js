import axios from "axios";
export function fetchProduct() {
  
    return axios.get( `https://kabra-backend.vercel.app/products/get-all-product`)
}

export function addProduct( formData ){
    return axios.post( `http://localhost:3000/products/add-product` , { formData } )
}