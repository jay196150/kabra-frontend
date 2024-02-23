import axios from "axios";
import { FETCHCARTPRODUCT , ADDCARTPRODUCT ,DELETPRO,DESCQUNT ,INCREQUNT } from "../constant";
export function fetchCartProduct() {
    return axios.get( FETCHCARTPRODUCT )
}

export function addCartProduct( cartProduct  ) {
    return axios.post( ADDCARTPRODUCT , {cartProduct} )
}

export function incrCartProductQut( id ) {
  
    return axios.put( INCREQUNT,{ id } )
}

export function decrCartProductQut(id) {
    return axios.put( DESCQUNT , {id} )
}

export function deletCartProduct(id) {
    return axios.delete( `${DELETPRO}/${id}` )
}