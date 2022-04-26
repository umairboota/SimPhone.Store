import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {

  const val = {email:"", password:"", remember: false}
  const [formValue, setformValue] = useState(val);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange =(e)=>{
    
    const {name, value} = e.target;
    setformValue({...formValue, [name]:value});
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    setformErrors(validate(formValue));
    setIsSubmit(true)
  }
  useEffect(()=>{
    // console.log(formErrors); //Error
    if(Object.keys(formErrors).length===0 && isSubmit){
      // console.log(formValue);  //form values
    }
  },[formErrors])

  const validate =(values)=>{

    const errors ={};
    // const regex = /^[^\s@]+@[^\s@]=\.[^\s@]{2,}$/i;
    if (!values.email){
      alert( "Email is Required")
    }
    if (!values.password){
      alert( "Password is Required")
    }
    return errors;
  }

  return (
    <div className=" bg-white mb-8 flex justify-end ">
      <div className="max-w-md w-full mx-auto">
        {/* <div className="text-5xl font-bold italic mt-2  text-right">
        </div> */}
        <img className="mt-5" src="images/sim.png" alt="Loading..." />
      </div>
      {/* <pre>{JSON.stringify(formValue, undefined,2)}</pre> */}
      <div className="max-w-md w-full mx-auto justify-end mt-4 bg-white p-8 shadow-2xl rounded-3xl">
        <form action="" className="space-y-6" onSubmit={onSubmit} >
          <div>
          <h1 className="text-center bold text-xl mb-12 text-green-600">Login</h1>
            <label
              className="text-sm font-bold text-green-500 block"
            >
              Email
            </label>
            <input
            value={formValue.email}
            onChange={handleChange}
              name="email"
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full p-2 border border-green-500 rounded-2xl mt-1"
            />
          </div>
          
          <div>
            <label
              className="text-sm font-bold text-green-500 block"
            >
              Password
            </label>
            <input
            value={formValue.password}
            onChange={handleChange}
              name="password"
              type="password"
              placeholder="Enter Your Password"
              className="w-full p-2 border border-green-500 rounded-2xl mt-1"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
              value={false}
              onChange={handleChange}
                name="remember"
                type="checkbox"
                className="h-4 w-4 text-blue-500 rounded-2xl"
              />
              
              <label htmlFor="" className="ml-2 text-sm text-black">
                Remember me
              </label>
            </div>
          </div>
          <div>
            <Link to="/forget" className="font-medium italic text-sm text-black">
              Forget Password
            </Link>
          </div>
          <div>
            <button className="w-full py-2 px-2 bg-green-600 hover:bg-green-700 rounded-2xl text-white text-sml  ">
              Login
            </button>
          </div>
          <div className="text-center">
            <label>Not a member?</label>
            <Link to="/signup" className="font-medium text-sm text-green-600">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
