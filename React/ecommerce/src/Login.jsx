import React  from "react";
import { BottomPart } from "./BottomPart";

export function Login(){
return (
<>
<div className="bg-white-500 h-100 w-1000 p-20 m-auto grid gap-6 form">
    <h2>
        Login
    </h2>

        <form className="login" action="login">
     <label htmlFor="">Enter your Email</label>
<input  type="email"  />
<label htmlFor=""> Enter your password</label>
<input type="password" />
<input className=" bg-red-600 pointer cursor-pointer  hover:bg-black-500"  type="submit" name="" id="submit" />
<label  htmlFor="">Forgot Your Password</label>
</form>
</div>
<BottomPart></BottomPart>
</>
)
}