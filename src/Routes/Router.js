import React from "react";
import {Routes, Route } from "react-router-dom";
import CartPage from "../pages/CartPage/CartPage";
import EditAdressPage from "../pages/EditAdressPage/EditAdressPage";
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RegisterAdressPage from "../pages/RegisterAdressPage/RegisterAdressPage";
import ResultPage from "../pages/ResultPage/ResultPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";


const Router = () => {
    return(
        
            <Routes>
                <Route exact path="/home" element={<HomePage/>}/> 
                <Route exact path="/cart" element={<CartPage/>}/> 
                <Route exact path="/edit-adress" element={<EditAdressPage/>}/> 
                <Route exact path="/edit-profile" element={<EditProfilePage/>}/> 
                <Route exact path="/login" element={<LoginPage/>}/> 
                <Route exact path="/" element={<LoginPage/>}/> 
                <Route exact path="/profile" element={<ProfilePage/>}/> 
                <Route exact path="/register-adress" element={<RegisterAdressPage/>}/> 
                <Route exact path="/result/:id" element={<ResultPage/>}/> 
                <Route exact path="/search" element={<SearchPage/>}/> 
                <Route exact path="/sign-up" element={<SignUpPage/>}/> 
                <Route path="/*" element={<ErrorPage/>}/>
            </Routes>
    )
}

export default Router