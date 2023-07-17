import axios from "../axios";

const getOrders=async()=>{
    return  axios.get('/order_items')
}
const SelectOrder=async(_id)=>{
    return  axios.get('/order_items/'+_id
    )
}
export { getOrders,SelectOrder}