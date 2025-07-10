import React, { useState } from 'react';
import { FaWindowClose } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handlesuccess } from '../util';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../redux/slices/AuthSlice';

const Login = () => {

    // Form Input Data 
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Handler 
    const handleChange = (e) => {

        setLoginData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        // data holding and not refresh
        e.preventDefault();

        const {email, password} = loginData;
        if (!email || !password) {
          return handleError("email, password are required");
        }

        dispatch(loginThunk(loginData))
            .unwrap()
            .then((res) => {
                handlesuccess(res.msg || "Login successful");
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            })
            .catch((err) => {
                handleError(err || "Login failed");
            });

        // try {
        //     const url = 'http://localhost:8000/api/user/login';

        //     const response = await fetch(url, {
        //         method: "POST",
        //         headers:{
        //             'Content-type': 'application/json',
        //         },
        //         body: JSON.stringify(loginData),
        //     });

        //     const result = await response.json();

        //     const { success, msg , token } = result;

        //     if(success) {
        //         handlesuccess(msg);
        //         localStorage.setItem("token", result.token);
        //         setTimeout(() => {
        //             navigate('/home');
        //         }, 1000);
        //     }

        //     console.log(result);

        // } catch (error) {
        //     handleError(error);
        // }
    };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center gap-6 ">

        <FaWindowClose className="text-[red] text-3xl absolute top-2 right-2" />
        

        <div className="bg-[#ffffff] shadow-2xl flex flex-col justify-center items-center gap-6 px-5 py-6">

            <h2 className="text-3xl fw-bold">Login</h2>
            
            <form className="flex flex-col gap-6 p-6" onSubmit={handleSubmit}>
                <input 
                    className="border-2 border-gray-400 w-[320px] h-[50px] px-3"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={loginData.email}
                    onChange={handleChange}
                />
                
                <input 
                    className="border-2 border-gray-400 w-[320px] h-[50px] px-3"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleChange}
                />

                <button 
                    className="bg-[red] hover:bg-red-500 text-white font-semibold px-4 py-2"
                    type="submit"
                >
                    Login
                </button>

                <span className="text-center">
                  Don't have an Account?{" "} 
                  <Link className="text-blue-700" to={"/signup"}>
                    SignUp
                  </Link>
                </span>
                
            </form>
            <ToastContainer />
        </div>
    </div>
  )
}

export default Login;