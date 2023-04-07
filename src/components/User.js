import React, { useEffect, useState } from 'react'
import Admin_menu from './Admin_menu'

//icons
import { HiUserAdd } from 'react-icons/hi'
import axios from 'axios';
import { API } from './Constant';


const User = () => {
    const [showUser, setShowUser] = useState("");
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [manager, setManager] = useState("");
    const [leader, setLeader] = useState("");
    const [designation, setDesignation] = useState("");
    const [status, setStatus] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [userDetails, setUserDetails] = useState("");

    console.log(role)
    console.log(status)

    const create_user = (e) => {

        const data = {
            name: name,
            phone: phone,
            role: role,
            status: status,
            t_leader: leader,
            manager: manager,
            department,
            designation: designation,
            office_email: email,
            password: password
        }

        axios.post(`${API}/create-user`, data, {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log(res)
                alert("User created successfully")
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
            const details = res.data.data
            setUserDetails(details)


        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getUserDetails()
    }, [])

    const option_role = ["user", "admin"]
    const option_status = ["Active", "Inactive"]
    const results = Array.isArray(userDetails)
    console.log(results)



    return (
        <div>
            <Admin_menu>
                <div className='mt-[10px] pt-[10px]'>
                    <div className='flex  justify-between border-b-2 py-[5px]'>
                        <div className='flex'>
                            <div className='ongoing_icon bg-[#4674D6]  flex justify-center items-center w-[30px] rounded-md'><HiUserAdd size={25} className='text-white' /></div>
                            <div className='flex items-center ml-[10px] font-semibold text-[16px]'><h1>Ongoing Projects</h1></div>
                        </div>
                        <div className='flex items-center'>
                            <button className='bg-[#4674D6] text-white px-[10px] py-[5px] rounded-md hover:bg-[#326c86] hover:text-[#ffffff]' onClick={() => setShowUser(!showUser)}>Create user</button>
                        </div>
                    </div>

                    {/*create user tab open */}

                    {showUser ? (
                        <div className='border-0 mt-[10px] rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                            <div className=' mt-[20px] border p-[20px]'>
                                <div className=' flex justify-between'>
                                    <div className='w-1/4'>
                                        <div className='mb-[5px]'>Name</div>
                                        <input className='border w-full p-[5px] outline-none' type="text" placeholder='Name'
                                            onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className='w-1/4'>
                                        <div className='mb-[5px]'>Department</div>
                                        <input className='border w-full p-[5px] outline-none' type="text" placeholder='Department'
                                            onChange={(e) => setDepartment(e.target.value)} />
                                    </div>
                                    <div className='w-1/4'>
                                        <div className='mb-[5px]'>Manager Name</div>
                                        <input className='border w-full p-[5px] outline-none' type="text" placeholder='Manager Name'
                                            onChange={(e) => setManager(e.target.value)} />
                                    </div>
                                </div>

                                <div className=' flex justify-between'>
                                    <div className='w-1/4'>
                                        <div className='mb-[5px]'>Team leader</div>
                                        <input className='border w-full p-[5px] outline-none' type="text" placeholder='Team leader'
                                            onChange={(e) => setLeader(e.target.value)} />
                                    </div>
                                    <div className='w-1/4'>
                                        <div className='mb-[5px]'>Designation</div>
                                        <input className='border w-full p-[5px] outline-none' type="text" placeholder='Designation'
                                            onChange={(e) => setDesignation(e.target.value)} />
                                    </div>
                                    <div className='w-1/4'>
                                        <div className='mb-[5px]'>Status</div>
                                        <select name="" className='w-full outline-none border p-[5px]' onChange={(e) => { setStatus(e.target.value) }}>
                                            <option value="user" >select</option>
                                            {option_status.map((option, index) => {
                                                return <option key={index}>{option}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>

                                <div className=' flex justify-between'>
                                    <div className='w-1/4'>
                                        <div className='mb-[5px]'>Phone</div>
                                        <input className='border w-full p-[5px] outline-none' type="text" placeholder='Phone'
                                            onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                    <div className='w-1/4'>
                                        <div className='mb-[5px]'>Office email</div>
                                        <input className='border w-full p-[5px] outline-none' type="text" placeholder='Office email '
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className='w-1/4'>
                                        <div className='mb-[5px]'>Role</div>
                                        <div>
                                            <select name="" className='w-full outline-none border p-[5px]' onChange={(e) => { setRole(e.target.value) }}>
                                                <option value="" disabled>select</option>
                                                {option_role.map((_option, index) => {
                                                    return <option key={index}>{_option}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className=' flex justify-start mt-[10px]'>
                                    <div className='w-1/2'>
                                        <div className='mb-[5px]'>Create user password</div>
                                        <input className='border w-full p-[5px] outline-none' type="password" placeholder='Password'
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </div>

                                </div>

                                <div className='mt-[10px] flex justify-center'>
                                    <button className='p-[8px] bg-[#4674D6] text-white rounded-md' onClick={create_user}>Create</button>
                                </div>

                            </div>
                        </div>

                    ) : null}

                    <div >
                        <table className='w-full mt-[10px]'>
                            <thead className='border' >
                                <tr>
                                    <th>userid</th>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>Designation</th>


                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {/* map an array of data here */}
                                {
                                    Array.isArray(userDetails) && userDetails.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{user.userid}</td>
                                                <td>{user.name}</td>
                                                <td>{user.department}</td>
                                                <td>{user.designation}</td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </table>

                    </div>


                </div>
            </Admin_menu>

        </div>
    )
}

export default User
