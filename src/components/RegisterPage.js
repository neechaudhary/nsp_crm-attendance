import React, { useState } from 'react';
import blob from "./../assets/blob.svg"
import {API} from "./Constant"
import axios from 'axios';

function RegisterPage() {
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
    <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundImage: `url(${blob})`, backgroundRepeat: "no-repeat", objectFit: "contain" }}>
      <h1 className="text-4xl font-bold mb-6">Create an account</h1>
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
  );
}

export default RegisterPage;
