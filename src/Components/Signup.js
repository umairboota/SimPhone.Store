import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const val = {name:"", email:"", cnic:"",phone:"", password:"", cpassword:"", remember: false}
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
    if (!values.name){
      alert( "Name is Required");
    }
    if (!values.cnic){
      alert( "CNIC is Required");
    }
    if (!values.phone){
      alert( "Phone Number is Required");
    }
    if (!values.email){
      alert( "Email is Required");
    }
    if (!values.password){
      alert( "Password is Required");
    }
    if (!values.cpassword){
      alert( "Confirm Password is Required");
    }
    return errors;
  }


  return (
    <div className=" bg-white mt-5 mb-8 flex justify-end ">
      <div className="max-w-md w-full mt-40 mx-auto">
        {/* <div className="text-5xl font-bold italic mt-2  text-right">
        </div> */}
        <img src="images/logo-5.png" alt="Loading..." />
      </div>
      <div className="max-w-md w-full mx-auto justify-end mt-4 bg-white p-8 shadow-2xl rounded-3xl">
        <form action="" className="space-y-6" onSubmit={onSubmit}>
          <h1 className="text-center bold font-serif text-2xl mb-12 text-gray-600">Signup</h1>
          <div>
            <label
              className="text-sm font-bold text-green-500 block"
            >
              Name*
            </label>
            {/* <p className="text-red-500 italic">{formErrors.name}</p> */}
            <input
             value={formValue.name}
             onChange={handleChange}
             placeholder= "Enter Your Name"
              name="name"
              type="text"
              className="w-full p-2 border border-green-500 hover:border-green-300 rounded-2xl mt-1"
            />
          </div>
          <div>
            <label
              className="text-sm font-bold text-green-500 block"
            >
              CNIC*
            </label>
            {/* <p className="text-red-500 italic">{formErrors.cnic}</p> */}
            <input
            value={formValue.cnic}
            onChange={handleChange}
              name="cnic"
              type="number"
              placeholder="Enter Valid CNIC"
              className="w-full p-2 border border-green-500 rounded-2xl mt-1"
            />
          </div>
          <div>
            <label
              className="text-sm font-bold text-green-500 block"
            >
              Email*
            </label>
            {/* <p className="text-red-500 italic">{formErrors.email}</p> */}
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
              Phone Number*
            </label>
            {/* <p className="text-red-500 italic">{formErrors.phone}</p> */}
            <input
            value={formValue.phone}
            onChange={handleChange}
              name="phone"
              type="number"
              placeholder="Enter Your Phone Number"
              className="w-full p-2 border border-green-500 rounded-2xl mt-1"
            />
          </div>
          <div>
            <label
              className="text-sm font-bold text-green-500 block"
            >
              Password*
            </label>
            {/* <p className="text-red-500 italic">{formErrors.password}</p> */}
            <input
            value={formValue.password}
            onChange={handleChange}
              name="password"
              type="password"
              placeholder="Enter Password"
              className="w-full p-2 border border-green-500 rounded-2xl mt-1"
            />
          </div>
          <div>
            <label
              className="text-sm font-bold text-green-500 block"
            >
              Confirm Password*
            </label>
            {/* <p className="text-red-500 italic">{formErrors.cpassword}</p> */}
            <input
            value={formValue.cpassword}
            onChange={handleChange}
              name="cpassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border border-green-500 rounded-2xl mt-1"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
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
            <button className="w-full py-2 px-2 bg-green-600 hover:bg-green-700 rounded-2xl text-white text-sml  ">
              Sign Up
            </button>
          </div>
          <div className="text-center">
            <label>Have an Account?</label>
            <Link to="/login" className="font-medium text-sm text-green-600">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
