import  {  useState } from "react";
import {BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import MainApp from './MainApp'
import Offers from "./Offers.";
import Address from "./Address.";
import { Login } from "./Login";
import SignIn from "./SignIn.";
import Product from "./Product";
import Payment from "./Payment";
import { Favorite } from "./Favorite";
import './app.css';

export function Header (){
const [state,setState] =useState(0)

    return (
<BrowserRouter>
   <div className="bg-blue-500 rounded-lg shadow-lg p-6 flex items-center justify-center space-x-6 hover:bg-green-600 transform hover:scale-105 transition-all">
  <span className="bg-red-300 p-3 rounded-full hover:bg-red-500 transition-all"></span>
        <img width={50} src="https://uploads-ssl.webflow.com/60dc342884abdb2684392f1a/62c821993e872a3532449391_Shopsy%20Logo%20New-10-10%201.svg" alt="" />

           <Link onClick={()=>setState(1)} to="/Main">Home</Link>
        <Link onClick={()=>setState(1)} to="/Product">Product</Link>
        <Link onClick={()=>setState(1)} to="/Offers">Offers</Link>
        <Link onClick={()=>setState(1)}  to="/Favorite">Favorite</Link>
        <Link onClick={()=>setState(1)} to="/Login" >Login</Link>
        <Link onClick={()=>setState(1)} to="/SignIn">SignIn</Link>
                <span className="bg-red-300 p-3 rounded-full hover:bg-red-500 transition-all"></span>
</div>
      <Routes>
      <Route exact path="/Main" element={<MainApp/>} />
        <Route exact path="/Product" element={<Product/>} />
        <Route exact path="/Offers" element={<Offers/>} />
        <Route exact path="/Favorite" element={<Favorite/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/SignIn" element={<SignIn/>} />
      </Routes>
      {state?"":<MainApp/>}
</BrowserRouter>
    );
}