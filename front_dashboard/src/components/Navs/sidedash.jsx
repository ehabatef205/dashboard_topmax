
import React from "react";
import { useNavigate } from "react-router-dom";

export function SideDash(){
    const navigate=useNavigate()
    return(
        <div style={{display:"flex",flexDirection:"column" ,backgroundColor:"rgb(80, 192, 169)"
        ,width:"15%",position: "relative",
        top: "50px",}}

>
            <button style={linkstyle} onClick={()=>navigate("/dash/category")}> الفئة   </button>
            <button style={linkstyle} onClick={()=>navigate("/dash/users")}> المستخدمين  </button>
            <button style={linkstyle} onClick={()=>navigate("/dash/orders")}> الطلبات  </button>
        </div>
    )
} 
const linkstyle={
    display:"flex",
    color:"white",
    fontSize:"1.25rem",
    border:"1px rgb(25,25,25)",
    margin :"20px",
    justifyContent:"center",
    cursor:"pointer",
    backgroundColor:"transparent"
    
}