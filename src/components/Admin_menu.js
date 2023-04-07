import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import profile_image from "./../assets/profile_image.jpg"
import curve from "./../assets/curve.svg"

import nation_express_logo from "./../assets/nation_express_logo.png"


//icons
import { MdDashboard } from 'react-icons/md'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import { AiTwotoneCalendar } from 'react-icons/ai'
import {IoLogOutSharp} from "react-icons/io5"
import { GiFireworkRocket } from "react-icons/gi"
import { FaProjectDiagram } from 'react-icons/fa'
import { ImTicket } from "react-icons/im"
import { MdSick } from "react-icons/md"
import axios from 'axios'
import { API } from './Constant'

const Admin_menu = ({ children }) => {
    const [emp_name, setemp_name]=useState("")
  const [dept, setdept]=useState("")
  const [m_name, setm_name]=useState("")

    const getUserDetails= (e) =>{
        axios.get(`${API}/leave-form/user-token`,{
          headers:{
            "Content-Type":"application/json",
            "token": localStorage.getItem("token")
      
          }
        }).then((res)=>{
        //   console.log(res.data)
          setemp_name(res.data.data.name)
          setdept(res.data.data.department)
          setm_name(res.data.data.manager)
        }).catch((err)=>{
          console.log(err)
        })
       }
      
       useEffect(()=>{
        getUserDetails();
       },[])

       const logout= (e)=>{
        axios.post(`${API}/logout`,{
           headers:{
            "token":localStorage.removeItem('token')
           }
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
       }

    return (
        <div className='w-full h-[100vh] '>
            <div className='flex '>
                <div className='w-[300px] h-[100vh]  shadow-md border-r-2  sticky top-0'>
                    <div className=' py-[20px]' style={{ backgroundColor: "rgba(70, 116, 214, 1)" }}>
                        <div className='flex justify-center'>
                            <div className='w-[80px] h-[80px] rounded-full bg-red-500 ' >
                                <img className='w-full h-full rounded-full object-cover bg-center' src={profile_image} alt="profile image" />
                            </div>
                        </div>
                        <div className='flex justify-center my-[8px]'>
                            <div className='font-semibold text-[16px] text-white'>{emp_name}</div>
                        </div>
                    </div>
                    <div className='w-full h-[30px]'  >
                        <img src={curve} alt="" />
                    </div>
                    <div className='pt-[20px]'>
                        <ul className=''>
                            <Link to='/admin-dashboard'>
                                <li className='py-[10px]  hover:bg-[rgb(173,173,175)]'><div className='flex items-center pl-[20px]'> <span className='pr-[10px] '><MdDashboard size={20} /></span><span>Dashboard</span></div> </li>
                            </Link>
                            <Link to='/work'>
                            <li className='py-[10px]  hover:bg-[#adadaf]'><div className='flex items-center pl-[20px]'> <span className='pr-[10px] '><GiFireworkRocket size={20} /></span><span>Work</span></div> </li>
                            </Link>
                            <Link to='/project'>
                            <li className='py-[10px]  hover:bg-[#adadaf]'><div className='flex items-center pl-[20px]'> <span className='pr-[10px] '><FaProjectDiagram size={20} /></span><span>Projects</span></div> </li>
                            </Link>
                            <Link to='/admin-tickets'>
                            <li className='py-[10px]  hover:bg-[#adadaf]'><div className='flex items-center pl-[20px]'> <span className='pr-[10px] '><ImTicket size={20} /></span><span>Tickets</span></div> </li>
                            </Link>
                            <Link to='/user'>
                            <li className='py-[10px]  hover:bg-[#adadaf]'><div className='flex items-center pl-[20px]'> <span className='pr-[10px] '><BsFillPersonPlusFill size={20} /></span><span>User</span></div> </li>
                            </Link>
                            <Link to='/admin-leave-application'>
                            <li className='py-[10px]  hover:bg-[#adadaf]'><div className='flex items-center pl-[20px]'> <span className='pr-[10px] '><MdSick size={20} /></span><span>Leave application</span></div> </li>
                            </Link>
                            <Link to='/admin-login'>
                            <li onClick={logout} className='py-[10px]  hover:bg-[#adadaf]'><div className='flex items-center pl-[20px]'> <span className='pr-[10px] '><IoLogOutSharp size={20} /></span><span>Logout</span></div> </li>
                            </Link>
                        </ul>
                    </div>
                </div>

                <div className='p-[20px] w-full  '>
                    <div className='flex justify-between border-b-2 pb-[5px] sticky top-0 bg-white'>
                        <div><img className='w-[150px]' src={nation_express_logo} alt="nation express logo" /></div>
                        <div className='pl-[10px]'>
                            <div className='flex justify-end font-semibold'>CRM IT</div>
                            <div>Welcome back {emp_name}</div>
                        </div>
                    </div>

                    <>{children}</>
                </div>


            </div>
        </div>
    )
}

export default Admin_menu
