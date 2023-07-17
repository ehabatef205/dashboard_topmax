import axios from "../axios";

const getuser=async(token)=>{
    return  axios.get('/user/view_profile'
    ,{headers:{authorization:token}}
    )
}
const getsomeuser=async(user_id)=>{
    return  axios.post('/user/view_user'
    ,{id:user_id}
    )
}
export { getuser,getsomeuser }