import axios from "axios";
import { ADDPRODUCT, FETCHPROD } from "../constant";
export function fetchProduct() {
    return axios.get(FETCHPROD )
}

export function addProduct( formData ){
    return axios.post( ADDPRODUCT ,  formData  )
}