import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../library/Api';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axiosInstance.post('/user/Login', { email, password });
      console.log(res.data);
      localStorage.setItem('data', res.data.role);
      window.location.reload()//to refresh the page
      console.log("Login response:", res.data);
      if (res.data.role === 'admin') {
        navigate('/AdminHome');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
    
  };

  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0 bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
    
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
          style={{
            backgroundImage: `url(https://i.pinimg.com/736x/3f/f7/8e/3ff78e2cc4b37354829bbbeb6e4e2768.jpg)`,
          }}
        ></div>


        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mt-4 flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#" className="text-xs text-gray-500 hover:text-gray-900 mt-2 text-end">
              Forgot Password?
            </a>
          </div>

          <div className="mt-8">
            <button
              className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
              onClick={() => {handleLogin()}}>Login</button>
          </div>


          <div className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100 cursor-pointer">
            <div className="flex px-5 justify-center w-full py-3">
              <div className="min-w-[30px]">
                <svg className="h-6 w-6" viewBox="0 0 40 40">
                  <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                  <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                  <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                  <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                </svg>
              </div>
              <div className="flex w-full justify-center">
                <h1 className="whitespace-nowrap text-gray-600 font-bold">
                  Sign in with Google
                </h1>
              </div>
            </div>
          </div>


          <div className="mt-4 flex items-center w-full text-center">
            <a
              href="/Register"
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Don&apos;t have an account yet?
              <span className="text-blue-700"> Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;






// import { React, useState } from 'react';
// import { axiosInstance } from '../library/Api';
// import { useNavigate } from 'react-router-dom';


// function LoginPage(){
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async() =>{

//         try {
//           const res = await axiosInstance.post('/user/Login',{email, password});
//           console.log(res.data);
//           localStorage.setItem('data',res.data.role)
//           if (res.data.role === 'admin'){
//             navigate('/AdminHome')
//           }
//           else {
//             navigate('/')
//           }
//           return;
//         } catch (error) {
//           console.log(error);
          
//         }
//     }

//     return (
//         <>
//             <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 ">
//             <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
//         <h2 className="text-2xl font-bold text-center text-[#3b82f6] mb-6">Welcome Back</h2>
//         <p className="text-2l font-bold text-center mb-6">Please enter your details</p>
//         <div>
//         <div className='space-y-5'>
//                 <label className="block text-sm text-gray-700 mb-1" htmlFor="email">Email:</label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
//                   placeholder="Enter your email"
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm text-gray-700 mb-1" htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   name="password"
                  
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] "
//                   placeholder="Enter your password"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <button       
//                 className="w-full bg-[#3b82f6] text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200" onClick={() => {handleLogin()}}>Login</button>
//         </div>
//         </div>
//         </div>

//         </>
//     )
// }

// export default LoginPage;

