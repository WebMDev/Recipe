import { useEffect, useState } from 'react';
import { FaWindowClose } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { handleError, handlesuccess } from '../util';
import { ToastContainer } from 'react-toastify';
import { signUpThunk } from '../redux/slices/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';

const Signup = () => {

    // Form Input Data
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [img, setImg] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, loading, error, successMessage } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
      if (successMessage) {
        setTimeout(() => {
            navigate("/login");
        }, 1000);
      }
    
    }, [successMessage, navigate]);
    
    // Handler 
    const handleChange = (e) => {

        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleImageChange = (e) => {
        setImg(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        // data holding and not refresh
        e.preventDefault();

        const {username, email, password} = formData;

        if (!username || !email || !password) {
            return handleError("username, email or passsword are required");
        }

        const data = new FormData();
        
        data.append("username", username)
        data.append("email", email)
        data.append("password", password)
        
        console.log("Selected image:", img);
        data.append("profilePicture", img)

        dispatch(signUpThunk(data));

        // try {
        //     const url = 'http://localhost:8000/api/user/register';

        //     const response = await fetch(url, {
        //         method: 'POST',
        //         headers:{
        //             'Content-type': 'application/json',
        //         },
        //         body: JSON.stringify(formData),
        //     });

        //     const result = await response.json();

        //     const {success, msg} = result;

        //     if(success) {

        //         handlesuccess(msg);
                
        //         setTimeout(() => {
        //             navigate('/login');
        //         }, 1000)
        //     } else {
        //         handleError(msg);
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

            <h2 className="text-3xl fw-bold">Register</h2>
            
            <form className="flex flex-col gap-6 p-6" onSubmit={handleSubmit} encType="multipart/form-data">
                <input 
                    className="border-2 border-gray-400 w-[320px] h-[50px] px-3"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                
                <input 
                    className="border-2 border-gray-400 w-[320px] h-[50px] px-3"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                
                <input 
                    className="border-2 border-gray-400 w-[320px] h-[50px] px-3"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                    className="border-2 border-gray-400 w-[320px] h-[50px] px-3"
                />

                <button 
                    className="bg-[red] hover:bg-red-500 text-white font-semibold px-4 py-2"
                    type="submit"
                >
                    Register
                </button>

                <span className="text-center">
                    Already have an Account?{" "}
                    <Link className="text-blue-700" to={"/login"}>
                        Login
                    </Link>
                </span>
                
            </form>
            <ToastContainer />
        </div>
    </div>
  )
}

export default Signup;