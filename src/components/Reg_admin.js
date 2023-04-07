import React, { useState } from 'react'
import {API} from "./Constant"
import axios from 'axios';
import { Link } from 'react-router-dom';

const Reg_admin = () => {

    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState("admin")
  
  
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const data= {
        name:Name,
        email:email,
        password:password,
        phone:phone,
        role:role
      }
   
  
      axios.post(`${API}/admin-register`,data)
        .then((res) => {
          console.log(res)
          alert("admin created successfully")
          window.location.href="/dashboard"
        }).catch((err) => {
          console.log(err)
        })
  
    }
  return (
    <div>
        <div className='flex justify-around my-[10px]'>
            <div></div>
            <div className='text-[25px] font-bold'>ADMIN REGISTER</div>
            <Link to='/'>
            <div className='w-[100px] bg-blue-200 flex items-center justify-center text-[18px] font-semibold'>User</div>
            </Link>
        </div>
        <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div
        class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
      >
        <div
          class="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
        >
          <div class="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">Nation xpress</a>
          </div>
          <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
          NationXpress [ A Unit of Earn India Consultancy Pvt. Ltd. ] e-Governance division believes in providing quality information and high standard of service delivery.
          </p>
          <p class="flex flex-col items-center justify-center mt-10 text-center">
            <span>Have an account?</span>
            <a href="/admin-login" class="underline">Get Started!</a>
          </p>
          <p class="mt-6 text-sm text-center text-gray-300">
            Read our <a href="#" class="underline">terms</a> and <a href="#" class="underline">conditions</a>
          </p>
        </div>
        <div class="p-5 bg-white md:flex-1">
          <h3 class="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
          <div  className="w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Name"
            type="text"
            placeholder="Name"
            name={Name}
            onChange={(e)=>setName(e.target.value) }
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name={email}
            onChange={(e)=>setEmail(e.target.value) }
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            
            onChange={(e)=>setPassword(e.target.value) }
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" >
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"

            placeholder="Phone"
            name={phone}
            onChange={(e)=>setPhone(e.target.value) }
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Account
        </button>
      </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Reg_admin
