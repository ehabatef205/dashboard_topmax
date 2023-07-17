import React, { useEffect } from "react";
import getProduct from "../../api/basis/product";
export default function Orderitems({details}){
    const[product,setProduct]=React.useState()
    useEffect(()=>{
        getProduct(details.product_id).then(res=>{
            setProduct(res.data)
        })
    })
    return(<div style={{display:"flex",flex:"row",justifyContent:"space-between"}}>
        <i>{product?.name}</i>

        <i>{"السعر :"+product?.price +"$"}</i>
        <i>{"عدد "+details?.quantity}</i>
        <i>{"مجموع جزئي :"+product?.price *details.quantity }</i>
        
                </div>)
}