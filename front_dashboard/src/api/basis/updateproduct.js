import axios from "../axios";


const updateProduct=async(name,desc,image,price,quantity,images,id)=>{
    return await axios.put(`/product/${id}`,{name:name,desc:desc,image:image,images:images,price:price,quantity:quantity})
}
export default updateProduct