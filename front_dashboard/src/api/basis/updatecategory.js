import axios from "../axios";


const updatecategory=async(name,desc,image,id)=>{
    return await axios.put(`/product_category/${id}`,{name:name,desc:desc,image:image})
}
export default updatecategory