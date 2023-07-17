import axios from "../axios";


const createcategory=async(name,desc,image)=>{
    return await axios.post(`/product_category`,{name:name,desc:desc,image:image})
}
export default createcategory

