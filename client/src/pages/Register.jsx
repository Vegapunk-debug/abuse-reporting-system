import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../library/Api';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await axiosInstance.post('/user/addUser', { username, email, password });
      console.log(res.data);
      navigate('/Login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0 bg-gray-100">
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        {/* Left Image Panel */}
        <div className="flex-1 bg-blue-900 text-center hidden md:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
            }}
          ></div>
        </div>

        {/* Right Form Panel */}
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                Sign Up
              </h1>
              <p className="text-[12px] text-gray-500">
                Hey, enter your details to create your account
              </p>
            </div>

            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-400 focus:bg-white"
                  type="text"
                  placeholder="Full Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  className="mt-5 tracking-wide font-semibold bg-blue-900 text-white w-full py-3 rounded-lg hover:bg-blue-800 transition-all duration-300 ease-in-out flex items-center justify-center focus:outline-none"
                  onClick={handleSubmit}
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign Up</span>
                </button>

                <p className="mt-6 text-xs text-gray-600 text-center">
                  Already have an account?{" "}
                  <a href="/Login">
                    <span className="text-blue-900 font-semibold">Sign In</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;



// import React, { useState } from 'react';
// import { axiosInstance } from '../library/Api';
// import { useNavigate, Link } from 'react-router-dom';

// function Register() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     try {
//       const res = await axiosInstance.post('/user/addUser', {
//         username,
//         email,
//         password
//       });
//       console.log(res.data);
//       navigate('/Login');
//     } catch (error) {
//       console.error("Registration error:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
//         <h2 className="text-2xl font-bold text-center text-[#3b82f6] mb-6">Create an Account</h2>
        
//         <div className="space-y-5">
//           <div>
//             <label htmlFor="name" className="block text-sm text-gray-700 mb-1">Full Name</label>
//             <input
//               type="text"
//               id="name"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
//               placeholder="Enter your full name"
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
//               placeholder="Enter your email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm text-gray-700 mb-1">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
//               placeholder="Enter your password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//         </div>

//         <button
//           className="mt-6 w-full bg-[#3b82f6] text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>

//         <p className="text-center text-sm text-gray-600 mt-4">
//           Already have an account?{" "}
//           <Link to="/Login" className="text-[#3b82f6] font-medium cursor-pointer">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Register;
