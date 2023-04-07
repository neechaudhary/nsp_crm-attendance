import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import axios from 'axios'
import { API } from './Constant'
import Admin_menu from './Admin_menu'

const Admin_leave = () => {
  const [userDetails, setUserDetails]=useState("")
  const [emp_name, setemp_name]=useState("")
  const [dept, setdept]=useState("")
  const [m_name, setm_name]=useState("")
  const [type_of_leave, setTypeofLeave]= useState("");
  const [from, setFrom]= useState("");
  const [to, setTo]= useState("");
  const [reason,setReason]= useState("")
  // console.log(userDetails)

  const leave_form = (e)=>{
    const data={
      emp_name:emp_name,
      dept:dept,
      m_name:m_name,
      type_of_absence:type_of_leave,
      from:from,
      to:to,
      reason:reason
    }
    axios.post(`${API}/leave-form`, data,{
      headers:{
        "Content-Type":"application/json",
        "token":localStorage.getItem("token")
      }
    }).then((res)=>{
      console.log(res)
      alert("Your leave has been applied successfully")
    }).catch((err)=>{
      console.log(err)
    })
  }

 const getUserDetails= (e) =>{
  axios.get(`${API}/leave-form/user-token`,{
    headers:{
      "Content-Type":"application/json",
      "token": localStorage.getItem("token")

    }
  }).then((res)=>{
    console.log(res.data.data.name)
    setemp_name(res.data.data.name)
    setdept(res.data.data.role)
    setm_name(res.data.data.role)
   
  }).catch((err)=>{
    console.log(err)
  })
 }

 useEffect(()=>{
  getUserDetails();
 },[])

  const leave= ["Sick leave","Casual leave","Earned leave","Maternity leave","Paternity leave","Compensatory leave","Leave without pay","Other",]
           
 const userdata=Array.isArray(userDetails) 

  return (
    <div>   
      <Admin_menu>
        <div className='mt-[10px] border py-[20px] px-[10px]'>
          <div className='flex justify-center font-bold text-[25px] text-[#262A2E]'>Leave application form</div>
          <div className=' mt-[20px] border p-[20px]'>
            
                
                <div className=' flex justify-between'>
                <div className='w-1/4'>
                  <div className='mb-[5px]'>Employee name</div>
                  <input className='border w-full p-[5px] outline-none' type="text" placeholder='Neeraj' value={emp_name} readOnly />
                </div>
                <div className='w-1/4'>
                  <div className='mb-[5px]'>Department</div>
                  <input className='border w-full p-[5px] outline-none' type="text" placeholder='IT' value={dept}  readOnly />
                </div>
                <div className='w-1/4'>
                  <div className='mb-[5px]'>Manager Name</div>
                  <input className='border w-full p-[5px] outline-none' type="text" placeholder='Anishka' value={m_name}  readOnly />
                </div>
              </div>
            
            <div className='flex justify-between mt-[10px]'>
              <div className='w-1/4'>
                <div className='mb-[5px]'>Type of absense request *</div>
                <div>
                  <select className='border w-full outline-none p-[5px]' value={type_of_leave} onChange={(e)=>{setTypeofLeave(e.target.value)}}>
                    <option value="">Select</option>
                {
                  leave.map((item, index)=>{
                    return <option key={index}>{item}</option>
                  })
                }
                  </select>
                </div>
              </div>
              <div className='w-1/4'>
                <div className='mb-[5px]'>Leave From *</div>
                <input className='border w-full p-[5px] outline-none' type="date" placeholder='Neeraj' onChange={(e)=>{setFrom(e.target.value)}}/>
              </div>
              <div className='w-1/4'>
                <div className='mb-[5px]'>Leave to *</div>
                <input className='border w-full p-[5px] outline-none' type="date" placeholder='Neeraj'onChange={(e)=>{setTo(e.target.value)}} />
              </div>
            </div>

            <div className='mt-[10px]'>
              <div className='mb-[5px]'>Reason for absense *</div>
              <textarea name="" id="" cols="30" rows="5" className='border w-full resize-none outline-none p-[10px]' value={reason} onChange={(e)=>{setReason(e.target.value)}}></textarea>

            </div >

            <div className='mt-[10px] flex justify-center'>
              <button className='p-[8px] bg-[#4674D6] text-white rounded-md' onClick={leave_form}>Submit</button>
            </div>

          </div>
        </div>
      </Admin_menu>

    </div>
  )
}

export default Admin_leave
