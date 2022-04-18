// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div>
//       <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//         <div
//           class="
//           flex flex-col
//           bg-white
//           shadow-md
//           px-4
//           sm:px-6
//           md:px-8
//           lg:px-10
//           py-8
//           rounded-3xl
//         "
//         >
//           <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
//             Welcome Back
//           </div>
//           <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
//             Enter your credentials to access your account
//           </div>

//           <div class="mt-10">
//             <form action="#">
//               <div class="flex flex-col mb-5">
//                 <label
//                   for="email"
//                   class="mb-1 text-xs tracking-wide text-gray-600"
//                 >
//                   E-Mail Address:
//                 </label>
//                 <div class="relative">
//                   <div
//                     class="
//                     inline-flex
//                     items-center
//                     justify-center
//                     absolute
//                     left-0
//                     top-0
//                     h-full
//                     w-10
//                     text-gray-400
//                   "
//                   >
//                     <i class="fas fa-at text-blue-500"></i>
//                   </div>

//                   <input
//                     id="email"
//                     type="email"
//                     name="email"
//                     class="
//                     text-sm
//                     placeholder-gray-500
//                     pl-10
//                     pr-4
//                     rounded-2xl
//                     border border-gray-400
//                     w-full
//                     py-2
//                     focus:outline-none focus:border-blue-400
//                   "
//                     placeholder="Enter your email"
//                   />
//                 </div>
//               </div>
//               <div class="flex flex-col mb-6">
//                 <label
//                   for="password"
//                   class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
//                 >
//                   Password:
//                 </label>
//                 <div class="relative">
//                   <div
//                     class="
//                     inline-flex
//                     items-center
//                     justify-center
//                     absolute
//                     left-0
//                     top-0
//                     h-full
//                     w-10
//                     text-gray-400
//                   "
//                   >
//                     <span>
//                       <i class="fas fa-lock text-blue-500"></i>
//                     </span>
//                   </div>

//                   <input
//                     id="password"
//                     type="password"
//                     name="password"
//                     class="
//                     text-sm
//                     placeholder-gray-500
//                     pl-10
//                     pr-4
//                     rounded-2xl
//                     border border-gray-400
//                     w-full
//                     py-2
//                     focus:outline-none focus:border-blue-400
//                   "
//                     placeholder="Enter your password"
//                   />
//                 </div>
//               </div>

//               <div class="flex w-full">
//                 <button
//                   type="submit"
//                   class="
//                   flex
//                   mt-2
//                   items-center
//                   justify-center
//                   focus:outline-none
//                   text-white text-sm
//                   sm:text-base
//                   bg-blue-500
//                   hover:bg-blue-600
//                   rounded-2xl
//                   py-2
//                   w-full
//                   transition
//                   duration-150
//                   ease-in
//                 "
//                 >
//                   <span class="mr-2 uppercase">Sign In</span>
//                   <span>
//                     <svg
//                       class="h-6 w-6"
//                       fill="none"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   </span>
//                 </button>
//               </div>
//             </form>
//           </div>
//           <div class="flex justify-center items-center mt-6">
//             <span class="ml-2">
//               You don't have an account?
//               <Link
//                 to="/register"
//                 class="text-xs ml-2 text-blue-500 font-semibold"
//               >
//                 Register now
//               </Link>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "./../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, ResetPassError] =
    useSendPasswordResetEmail(auth);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = () => {
    sendPasswordResetEmail(email);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="login w-11/12 md:w-1/3 mx-auto border-2 my-5 p-10 rounded-xl font-serif">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-center text-blue-500">
          Please Login...
        </h1>
        <div className="my-3">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            onBlur={handleEmail}
            className="btn text-xl p-2 border w-full"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="my-3">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            onBlur={handlePassword}
            className="btn text-2xl border w-full p-2"
            type="password"
            name="password"
            required
          />
        </div>

        {(loading || sending) && <p>Loading</p>}

        {(error || ResetPassError) && (
          <p className="text-red-600">
            Error: {error?.message} {ResetPassError?.message}
          </p>
        )}

        <div className="flex justify-center my-3">
          <input
            className="bg-blue-600 text-xl font-bold px-5 py-2 text-white rounded-xl mt-2"
            type="submit"
            value="Login"
          />
        </div>
      </form>
      <p className="text-xl text-center">
        First time on the Tourist guid?
        <Link
          className="text-blue-500 hover:text-orange-600 ml-3"
          to="/register"
        >
          Create account
        </Link>
      </p>
      <p className="text-xl text-center mt-3">
        forget password?
        <span
          onClick={handleResetPassword}
          className="text-blue-500 hover:text-orange-600 ml-3 cursor-pointer"
        >
          reset password
        </span>
      </p>
    </div>
  );
};

export default Login;
