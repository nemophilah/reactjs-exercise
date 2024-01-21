import React, { useState } from 'react'
import './style.css';

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'


export const LoginSignup = () => {

    const [action, setAction] = useState("Login");

    return (
        <div className="container flex font-sans bg-white flex-col pb-5 mt-52 m-auto w-max px-9">
            <div className="header flex justify-center flex-col items-center gap-2 w-full mt-8">
                <div className="text text-3xl font-bold text-purple-800">{action}</div>
                <div className="underline w-16 h-1 bg-purple-800"></div>
            </div>
            <div className="inputs mt-14 flex flex-col gap-6">
                {action === "Login" ? <div></div> : <div className="input flex items-center m-auto w-96 h-14  bg-gray-300 rounded-md">
                    <img src={user_icon} alt="" className=' mx-5' />
                    <input placeholder="Name" type="text" className=' h-12 w-96 bg-transparent border-none outline-none text-l  text-gray-600' />
                </div>}

                <div className="input input flex items-center m-auto w-96 h-14  bg-gray-300 rounded-md">
                    <img src={email_icon} alt="" className=' mx-5' />
                    <input placeholder='Email' type="email" className=' h-12 w-96 bg-transparent border-none outline-none text-l  text-gray-600' />
                </div>
                <div className="input input flex items-center m-auto w-96 h-14  bg-gray-300 rounded-md">
                    <img src={password_icon} alt="" className=' mx-5' />
                    <input placeholder='Passsword' type="password" className=' h-12 w-96 bg-transparent border-none outline-none text-l text-gray-600' />
                </div>
            </div>
            {action === "Sign Up" ?
                <div className="forgot-password mt-7  text-gray-600">Already have an account?<span className='text-blue-700 cursor-pointer' onClick={() => { setAction("Login") }}> Login!</span></div>
                : <div><div className="forgot-password mt-7 first-letter: text-gray-600">Lost Password?<span className='text-blue-700 cursor-pointer'> Click here!</span></div>
                    <div className="forgot-password mt-2  text-gray-600">Don't have an account?<span className='text-blue-700 cursor-pointer' onClick={() => { setAction("Sign Up") }}> Sign Up!</span></div></div>}
            <div className="submit-container flex gap-7 my-14 mx-auto">
                <div className="submit flex justify-center items-center w-40 h-11 rounded-3xl bg-purple-900 text-white text-l cursor-pointer font-semibold">{action}</div>
            </div>
        </div>
    )
}

export default LoginSignup;
