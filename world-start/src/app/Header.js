"use client"
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from "./Product";
import { Main } from "./Main";
import { Favorite } from "./Favorite";
import { Login } from "./Login";
import { SignIn } from "./SignIn";
import { Offers } from "./Offers";

export function Header() {
  const [state,setState] =useState(0)
  return (
    <BrowserRouter>
<div className="bg-blue-500 rounded-lg shadow-lg p-6 flex items-center justify-center space-x-6 hover:bg-green-600 transform hover:scale-105 transition-all">
  <span className="bg-red-300 p-3 rounded-full hover:bg-red-500 transition-all"></span>
        <img src="" alt="" />
      <Link onClick={(e)=>setState(1)} to="/Main">Home</Link>
        <Link onClick={(e)=>setState(1)} to="/Product">Product</Link>
        <Link onClick={(e)=>setState(1)} to="/Offers">Offers</Link>
        <Link onClick={(e)=>setState(1)}  to="/Favorite">Favorite</Link>
        <Link onClick={(e)=>setState(1)} to="/Login" >Login</Link>
        <Link onClick={(e)=>setState(1)} to="/SignIn">SignIn</Link>
        <span className="bg-red-300 p-3 rounded-full hover:bg-red-500 transition-all"></span>
</div>
      <Routes>
      <Route exact path="/Main" element={<Main/>} />
        <Route exact path="/Product" element={<Product/>} />
        <Route exact path="/Offers" element={<Offers/>} />
        <Route exact path="/Favorite" element={<Favorite/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/SignIn" element={<SignIn/>} />
      </Routes>
      {state?"":<Main/>}
    </BrowserRouter>
  );
}
