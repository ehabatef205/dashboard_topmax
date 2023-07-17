import axios from "../axios";
const deletecat=async(id)=>{
    axios.delete('/product_category/'+id).then(res=>{
        if(res.status===200){
            return(true)
        }
    })
}
export default deletecat