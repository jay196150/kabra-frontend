import axios from "axios";
export function fetchCartProduct() {
    return axios.get( `https://kabra-backend.vercel.app/card/get-all-card-product` )
}

export function addCartProduct( cartProduct  ) {
    return axios.post( `https://kabra-backend.vercel.app/card/add-card-product` , {cartProduct} )
}

export function incrCartProductQut( id ) {
    console.log("incall" ,id)
    return axios.put( `https://kabra-backend.vercel.app/card/add-card-product-qtn`,{ id } )
}

export function decrCartProductQut(id) {
    return axios.put( `https://kabra-backend.vercel.app/card/sub-card-product-qtn` , {id} )
}

export function deletCartProduct(id) {
    console.log( "xxcc" , id)
    return axios.delete( `https://kabra-backend.vercel.app/card/delete-card-product/${id}` )
}