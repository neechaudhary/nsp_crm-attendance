import React, { useEffect, useState } from 'react'
import Admin_menu from './Admin_menu'
//icons
import { HiUserAdd } from 'react-icons/hi'
import axios from 'axios';
import { API } from './Constant';


const Admin_tickets = () => {
  const [showUser, setShowUser] = useState("");
  const [assign, setAssign] = useState("");
  const [name, setName] = useState("");

  const [department, setDepartment] = useState("");
  const [t_details, setT_details] = useState("");
  const [priority, setPriority] = useState("");
  const [issue, setTypeIssue] = useState("");


  const option_role = ["Low", "Medium", "High"]
  const option_status = ["Hardware", "Network", "Dialer", "CRM/Portal", "Mail", "Other"]

  const Raise_tickets = (e) => {

    const data = {
    
    }

    axios.post(`${API}/raise-ticket`, data, {
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
        }
    })
        .then((res) => {
            console.log(res)
            alert("ticket raised successfully")
            window.location.reload()
        }).catch((err) => {
            console.log(err)
        })

}

  const getUserDetails = () => {
    axios.get(`${API}/create-user`, {
        headers: {
            "content": "application/json",
            "token": localStorage.getItem("token")
        }
    }).then((res) => {
        console.log(res.data.data)
      
        setAssign(res.data.data)
       


    }).catch((error) => {
        console.log(error)
    })
}

useEffect(() => {
    getUserDetails()
}, []) 

const gettokenDetails= (e) =>{
  axios.get(`${API}/leave-form/user-token`,{
    headers:{
      "Content-Type":"application/json",
      "token": localStorage.getItem("token")

    }
  }).then((res)=>{
    console.log(res.data.data.role)
    setName(res.data.data.name)
    setDepartment(res.data.data.role)
    
  }).catch((err)=>{
    console.log(err)
  })
 }

 useEffect(()=>{
  gettokenDetails();
 },[])



  return (
    <div>
      <Admin_menu>
        <div className='mt-[10px] pt-[10px] '>
          <div className='flex  justify-between border-b-2 py-[5px]'>
            <div className='flex'>
              <div className='ongoing_icon bg-[#4674D6]  flex justify-center items-center w-[30px] rounded-md'><HiUserAdd size={25} className='text-white' /></div>
              <div className='flex items-center ml-[10px] font-semibold text-[16px]'><h1>Tickets</h1></div>
            </div>
            <div className='flex items-center'>
              <button className='bg-[#4674D6] text-white px-[10px] py-[5px] rounded-md hover:bg-[#326c86] hover:text-[#ffffff]' onClick={() => setShowUser(!showUser)}>Raise tickets</button>
            </div>
          </div>

          {/* raise tickets tab */}
          {showUser ? (
            <div className='justify-center border-0 mt-[150px] inset-0  z-[50] rounded-lg shadow-lg  flex fixed outline-none focus:outline-none'>
              <div className='  max-w-3xl border bg-white h-[60vh] p-[20px]'>
                <div className=' flex justify-between'>
                  <div className='w-[47%]'>
                    <div className='mb-[5px]'>Employee Name</div>
                    <input className='border w-full p-[5px] outline-none' type="text" placeholder='Name'
                     value={name} readOnly />
                  </div>
                  <div className='w-[47%]'>
                    <div className='mb-[5px]'>Department</div>
                    <input className='border w-full p-[5px] outline-none' type="text" placeholder='Department'
                      value={department} readOnly/>
                  </div>

                </div>

                <div className=' flex justify-between'>
                  <div className='w-full'>
                    <div className='mb-[5px]'>Type of issue</div>
                    <select name="" className='w-full outline-none border p-[5px]' onChange={(e) => { setTypeIssue(e.target.value) }}>
                      <option value="user" >select</option>
                      {option_status.map((option, index) => {
                        return <option key={index}>{option}</option>
                      })}
                    </select>
                  </div>
                </div>

                <div className=' flex justify-between'>

                  <div className='mt-[10px] w-full'>
                    <div className='mb-[5px]'>Ticket details</div>
                    <textarea name="" id="" cols="30" rows="5" className='border w-full resize-none outline-none p-[10px]'value={t_details} onChange={(e)=>{setT_details(e.target.value)}} ></textarea>

                  </div >
                </div>

                <div className=' flex justify-between'>
                  <div className='w-[47%]'>
                    <div className='mb-[5px]'>Assign to:</div>
                    <div>
                      <select name="" className='w-full outline-none border p-[5px]' onChange={(e) => { setAssign(e.target.value) }}>
                        <option value="" >select</option>
                        {assign.map((_option, index) => {
                          return <option key={index}>{_option.name}</option>
                        })}
                      </select>
                    </div>
                  </div>

                  <div className='w-[47%]'>
                    <div className='mb-[5px]'>Priority level</div>
                    <div>
                      <select name="" className='w-full outline-none border p-[5px]' onChange={(e) => { setPriority(e.target.value) }}>
                        <option value="" >select</option>
                        {option_role.map((_option, index) => {
                          return <option key={index}>{_option}</option>
                        })}
                      </select>
                    </div>
                  </div>
                </div>

                <div className='mt-[10px] flex justify-center'>
                  <button className='p-[8px] bg-[#4674D6] text-white rounded-md mt-[20px]' onClick={Raise_tickets} >Raise</button>
                </div>

              </div>
            </div>

          ) : null}

        </div>

        
      </Admin_menu>

    </div>
  )
}

export default Admin_tickets
