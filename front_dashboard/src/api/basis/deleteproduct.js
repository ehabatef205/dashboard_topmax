import axios from "../axios";
const deleteproduct=async(id)=>{
    axios.delete('/product/'+id).then(res=>{
        if(res.status===200){
            return(true)
        }
    })
}
export default deleteproduct