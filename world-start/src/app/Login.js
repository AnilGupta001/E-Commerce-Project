import React  from "react";

export function Login(){
return (
<>
<div className="bg-white-500 h-100 w-1000 p-20 m-auto grid gap-6">
    <h2>
        Login
    </h2>

        <form action="login"></form>
     <label htmlFor="">Enter your Email</label>
<input  type="email"  />
<label htmlFor=""> Enter your password</label>
<input type="password" />
<input className=" bg-red-600 pointer cursor-pointer  hover:bg-black-500"  type="submit" name="" id="" />
<label  htmlFor="">Forgot Your Password</label>

</div>
</>
)
}