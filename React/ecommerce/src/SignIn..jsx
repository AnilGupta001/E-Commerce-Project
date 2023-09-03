import React from "react";
import { BottomPart } from "./BottomPart";


    export default function SignIn(){
    return (
    <>
    <div className="bg-white-500 h-100 w-1000 p-5 m-auto grid gap-6 form">
        <h2>
            Login
        </h2>
    
            <form action="login" className="login">
            <label htmlFor="">Name</label>
            <input type="Name" name="" id="" />
            <label htmlFor="">Mobile Number</label>
             <input type="mobile" />
                    <label htmlFor="">Enter your Email</label>
    <input  type="email"  />
    <label htmlFor=""> Enter your password</label>
    <input type="password" />
    <input className=" bg-red-600 pointer cursor-pointer  hover:bg-black-500"  type="submit" name="" id="submit" />
     </form>
    </div>
    <BottomPart></BottomPart>
    </>
    )
    }
  