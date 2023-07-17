import React, { useState } from "react";
import { Router, Route, Routes } from "react-router-dom";
import Header from "./components/Navs/Hreader";
import Footer from "./components/Navs/footer";
import DashpageCategory from "./pages/CatDash";
import DashpageOrders from "./pages/dash";
import DashpageUsers from "./pages/UserDash";
import EditCategory from "./pages/Editcat";
import CreateCategory from "./pages/Create cat";
import DashpageProduct from "./pages/ProductsDash";
import EditProduct from "./pages/EditProduct";
import ViewOrder from "./pages/Vieworder";
import Createproduct from "./pages/Create product";
 function App() {
   return (
    <div className="App" style={{backgroundColor: "#e7e7e7"}}>

  <Header></Header>
       <Routes>

        <Route path="/" element={<DashpageCategory />} /> 
        <Route path="/dash/users" element={<DashpageUsers />} /> 
        <Route path="/dash/orders" element={<DashpageOrders />} /> 
        <Route path="/dash/category/edit/:id" element={<EditCategory/>} /> 
        <Route path="/dash/category/create" element={<CreateCategory />} /> 
        <Route path="/dash/product/cat/:id" element={<DashpageProduct />} />
        <Route path="/dash/product/edit/:id" element={<EditProduct/>} />  
        <Route path="/vieworder/" element={<ViewOrder/>} />  
        
        <Route path="/dash/create/product" element={<Createproduct/>} />  
        
      </Routes> 
      <footer style={{height:"200px",position:"relative" ,top:"70px"}}> <Footer/></footer> 
    </div>
  );
}

export default App; 

