import React from "react";
import { Routes,Route } from "react-router-dom";
import Electronic from "../components/Electronic";
import Furniture from "../components/Furniture";
import Home from "../components/Home";
import KidsAndToys from "../components/Kidsandtoy";
import Loginpage from "../components/Login";
import Mobile from "../components/Mobile";
import Sports from "../components/Sports";



const AllRouters =()=>{
    return <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="electronic" element={<Electronic/>}></Route>
        <Route path="furniture" element={<Furniture/>}></Route>
        <Route path="kidsAndToys/:" element={<KidsAndToys/>}></Route>
        <Route path="mobile" element={<Mobile/>}></Route>
        <Route path="sports" element={<Sports/>}></Route>
        <Route path="login" element={<Loginpage/>}></Route>
    </Routes>
}

export default AllRouters;