import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import moment from 'moment/moment'

//images
import nation_express_logo from "./../assets/nation_express_logo.png"
import card_image from "./../assets/circle-scatter-haikei.svg"
import card1_icon from "./../assets/attendance.png"
import card2_image from "./../assets/blob-scatter-haikei.svg"
import card2_icon from "./../assets/lunch-time.png"
import card3_image from "./../assets/low-poly-grid-haikei.svg"
import card3_icon from "./../assets/food-tray.png"
import card4_image from "./../assets/polygon-scatter-haikei.svg"
import card4_icon from "./../assets/coffee.png"
import card5_image from "./../assets/blob-scene-haikei.svg"
import card5_icon from "./../assets/coffee-1.png"
import abstract_img from "./../assets/abstract_background.webp"
import abstract_img_1 from "./../assets/abstract_background_1.webp"
import abstract_img_2 from "./../assets/abstract_background_2.webp"
import total_time_icon from "./../assets/total_time.png"
import remaining_time from "./../assets/remain.png"
import productive_time from "./../assets/productive.png"
import axios from 'axios'
import { API } from './Constant'




const Dashboard = () => {

    const [timeIn, setTimeIn] = useState("");
    const [timeOut, setTimeOut] = useState("");
    const [morningIn, setMorningIn] = useState("");
    const [morningOut, setMorningOut] = useState("");
    const [showMB, setshowMB] = useState("");
    const [showLB, setshowLB] = useState("");
    const [showEB, setshowEB] = useState("");
    const [showOB, setshowOB] = useState("");
    const [hide_div, sethide_div] = useState(true);
    const [lunchIn, setLunchIn] = useState("");
    const [lunchOut, setLunchOut] = useState("");
    const [l_break, set_l_break] = useState("");
    const [eveningIn, setEveningIn] = useState("");
    const [eveningOut, setEveningOut] = useState("");
    const [e_break, set_e_break] = useState("");
    const [otherIn, setOtherIn] = useState("");
    const [otherOut, setOtherOut] = useState("");
    const [o_break, set_o_break] = useState("");
    const [totalTime, setTotalTime] = useState("");
    const [showButton, setShowButton] = useState();
    const [button_off, setButtonOff] = useState("");
    const [attendance_details, setAttendance_details] = useState("")

    // console.log(timeIn)
    // console.log(timeOut)

    const momentTime = moment().format("hh:mm:ss")
    // console.log(momentTime)

    ////post attendance
    function handleTimein(timeIn) {
        const momentTime = moment().format("hh:mm:ss")
        // console.log(momentTime)
        axios.post(`${API}/attendance`, {
            time_in: momentTime,
            time_out: "00:00:00"
        }, {
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            }
        }).then((res) => {
            console.log(res)
            // alert("data saved")
            // window.location.reload();
            window.location.reload()
        }).catch((err) => {
            console.log(err)
        })
    }
    //get user
    const getUserDetails = () => {
        axios.get(`${API}/create-user`, {
            headers: {
                "content": "application/json",
                "token": localStorage.getItem("token")
            }
        }).then((res) => {
            console.log(res.data.data)
            const details = res.data.data
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getUserDetails()
    }, [])

    //get attendance
    const getAttendance = () => {
        axios.get(`${API}/attendance`, {
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            }
        }).then((res) => {
            console.log(res.data.data)
            setAttendance_details(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getAttendance()
    }, [])

    const details = Array.isArray(attendance_details)
    console.log(details)

    //update
    const handleUpdateTime_out = (_id) => {
        console.log(_id)
        const momentTime = moment().format("hh:mm:ss")

        const data = {
            time_out: momentTime
        }

        axios.patch(`${API}/attendance/${_id}`, data, {
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            }
        })
            .then((res) => {
                console.log(res)
                // console("updated")
            }).catch((err) => {
                console.log(err)
            })
    }

    //update
    const handleUpdateM_in = (_id) => {
        console.log(_id)
        const momentTime = moment().format("hh:mm:ss")

        const data = {
            m_break_in: momentTime
        }

        axios.patch(`${API}/attendance/${_id}`, data, {
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            }
        })
            .then((res) => {
                console.log(res)
                // console("updated")
            }).catch((err) => {
                console.log(err)
            })
    }
    //update
    const handleUpdateM_out = (_id) => {
        console.log(_id)
        const momentTime = moment().format("hh:mm:ss")

        const data = {
            m_break_out: momentTime
        }

        axios.patch(`${API}/attendance/${_id}`, data, {
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            }
        })
            .then((res) => {
                console.log(res)
                // console("updated")
            }).catch((err) => {
                console.log(err)
            })
    }
    //calculate m_break
    //update
    //    const handleUpdateM_break = (_id) => {
    //     console.log(_id)
    //    console.log(m_break)

    //     const data = {
    //         m_break: m_break
    //     }

    //     axios.patch(`${API}/attendance/${_id}`, data, {
    //         headers: {
    //             "Content-Type": "application/json",
    //             "token": localStorage.getItem("token")
    //         }
    //     })
    //         .then((res) => {
    //             console.log(res)
    //             // console("updated")
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    // }
    // useEffect(()=>{
    //     handleUpdateM_break();
    // },[])

    //update
    const handleUpdateL_in = (_id) => {
        console.log(_id)
        const momentTime = moment().format("hh:mm:ss")

        const data = {
            l_break_in: momentTime
        }

        axios.patch(`${API}/attendance/${_id}`, data, {
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            }
        })
            .then((res) => {
                console.log(res)
                // console("updated")
            }).catch((err) => {
                console.log(err)
            })
    }
    //update
    const handleUpdateL_out = (_id) => {
        console.log(_id)
        const momentTime = moment().format("hh:mm:ss")

        const data = {
            l_break_out: momentTime
        }

        axios.patch(`${API}/attendance/${_id}`, data, {
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            }
        })
            .then((res) => {
                console.log(res)
                // console("updated")
            }).catch((err) => {
                console.log(err)
            })
    }


    //update
    const handleUpdateE_in = (_id) => {
        console.log(_id)
        const momentTime = moment().format("hh:mm:ss")

        const data = {
            e_break_in: momentTime
        }

        axios.patch(`${API}/attendance/${_id}`, data, {
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            }
        })
            .then((res) => {
                console.log(res)
                // console("updated")
            }).catch((err) => {
                console.log(err)
            })
    }
    //update
    const handleUpdateE_out = (_id) => {
        console.log(_id)
        const momentTime = moment().format("hh:mm:ss")

        const data = {
            e_break_out: momentTime
        }

        axios.patch(`${API}/attendance/${_id}`, data, {
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            }
        })
            .then((res) => {
                console.log(res)
                // console("updated")
            }).catch((err) => {
                console.log(err)
            })
    }

    //update
    const handleUpdateO_in = (_id) => {
        console.log(_id)
        const momentTime = moment().format("hh:mm:ss")

        const data = {
            o_break_in: momentTime
        }

        axios.patch(`${API}/attendance/${_id}`, data, {
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            }
        })
            .then((res) => {
                console.log(res)
                // console("updated")
            }).catch((err) => {
                console.log(err)
            })
    }
    //update
    const handleUpdateO_out = (_id) => {
        console.log(_id)
        const momentTime = moment().format("hh:mm:ss")

        const data = {
            o_break_out: momentTime
        }

        axios.patch(`${API}/attendance/${_id}`, data, {
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            }
        })
            .then((res) => {
                console.log(res)
                // console("updated")
            }).catch((err) => {
                console.log(err)
            })
    }


    // //function to add hours not in use
    function addHours(time, hour) {
        time.setTime(time.getTime() + hour * 60 * 60 * 1000);
        return time;
    }
    //not in use
    const gettotalTime = () => {
        const result = addHours(new Date(), 9);
        const hour = (result.getHours());
        const minutes = (result.getMinutes());
        const seconds = (result.getSeconds());

        const showTotalTime = `${hour}:${minutes}:${seconds}`
        setTotalTime(showTotalTime);

        //console.log(showTotalTime);
    }

    //function to handle time difference not in use
    function timeDifference(start, end) {
        const startDate = new Date(`1970-01-01T${start}`);
        const endDate = new Date(`1970-01-01T${end}`);
        const diff = endDate.getTime() - startDate.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }
    // console.log(timeDifference(`${timeIn}`, `${totalTime}`));

    //     function addHours(start, end) {
    //         var mins= moment.duration(start).asMinutes() + moment.duration(end).asMinutes();
    //           function z(n){return (n<10? '0':'') + n;}
    //           var h = (mins/60 |0) % 24;
    //           var m = mins % 60;
    //           return z(h) + ':' + z(m);
    //         }
    // console.log(addHours(`${timeIn}`,`${totalTime}`))



    return (
        <div  >
            <Menu>
                <div>
                    <div className='w-full pt-[10px] flex justify-around flex-wrap '>
                        {hide_div ? (
                           null
                        ) : (
                            <div className='w-[200px] mt-[10px] p-[6px] rounded-md border' style={{ backgroundImage: `url(${card_image})`, objectFit: 'fit' }}>
                            <div className='flex justify-center'><img className='w-[50px]' src={card1_icon} alt="" /></div>
                            <div className='flex justify-center font-semibold text-white'>Mark attendace</div>

                            <div className='flex justify-center font-semibold text-white  my-[10px]' ><button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#03be79]' onClick={() => { setShowButton(!hide_div); handleTimein() }} >Time in</button></div>
                        </div>
                        )}



                        {attendance_details.length > 0 && attendance_details.map((attendance, index) => {
                            return (

                                <div className='w-[200px] mt-[10px] p-[6px] rounded-md border' key={index} style={{ backgroundImage: `url(${card_image})`, objectFit: 'fit' }}>
                                    <div className='flex justify-center'><img className='w-[50px]' src={card1_icon} alt="" /></div>
                                    <div className='flex justify-center font-semibold text-white'>Mark attendace</div>

                                    {showButton ? (

                                        <div className='flex justify-center font-semibold text-white  my-[10px] '><button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#03be79]' onClick={() => { handleUpdateTime_out(attendance.admin_user) }} >Time out</button></div>
                                    ) : (


                                        <div className='flex justify-center font-semibold text-white  my-[10px] '><button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#03be79]' onClick={() => { setShowButton(true); handleTimein() }} >Time in</button></div>
                                    )}


                                    <div className='flex justify-center' ><span className='text-white' >{attendance.time_in}</span></div>

                                </div>
                            )
                        })}

                        {attendance_details.length > 0 && attendance_details.map((attendance, index) => {
                            return (

                                <div className='bg-[#f56954] w-[200px] mt-[10px] p-[6px] rounded-md border bg-center' key={index} style={{ backgroundImage: `url(${card2_image})`, }}>
                                    <div className='flex justify-center'><img className='w-[50px]' src={card2_icon} alt="" /></div>
                                    <div className='flex justify-center font-semibold text-white'>Morning break</div>

                                    {showMB ? (
                                        <div className='flex justify-center font-semibold text-white  my-[10px] '><button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#03be79]' onClick={() => { handleUpdateM_out(attendance.admin_user) }}>Time out</button></div>
                                    ) : (
                                        <div className='flex justify-center font-semibold text-white  my-[10px] '><button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#f56954]' onClick={() => { setshowMB(true); handleUpdateM_in(attendance.admin_user) }}>Time in</button></div>
                                    )}

                                    <div className='flex justify-center'><span className='text-white'>{attendance.m_break_in}</span><span className='text-white'>-</span><span className='text-white'>{attendance.m_break_out}</span></div>
                                </div>
                            )
                        })}

                        {attendance_details.length > 0 && attendance_details.map((attendance, index) => {
                            return (
                                <div className='bg-[#00c0ef] w-[200px] mt-[10px] p-[6px] rounded-md border bg-center' style={{ backgroundImage: `url(${card3_image})` }}>
                                    <div className='flex justify-center'><img className='w-[50px]' src={card3_icon} alt="" /></div>
                                    <div className='flex justify-center font-semibold text-white'>Lunch break</div>
                                    {showLB ? (
                                        <div className='flex justify-center font-semibold text-white  my-[10px] '><button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#03be79]' onClick={() => { handleUpdateL_out(attendance.admin_user) }}>Time out</button></div>

                                    ) : (
                                        <div className='flex justify-center font-semibold text-white  my-[10px] '><button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#00c0ef]' onClick={() => { setshowLB(true); handleUpdateL_in(attendance.admin_user) }}>Time in</button></div>

                                    )}
                                    <div className='flex justify-center'><span className='text-white'>{attendance.l_break_in}</span><span className='text-white'>-</span><span className='text-white'>{attendance.l_break_out}</span></div>
                                </div>
                            )
                        })}
                        {attendance_details.length > 0 && attendance_details.map((attendance, index) => {
                            return (
                                <div className='bg-[#9eb849] w-[200px] mt-[10px] p-[6px] rounded-md border ' style={{ backgroundImage: `url(${card4_image})`, objectFit: "contain" }}>
                                    <div className='flex justify-center'><img className='w-[50px]' src={card4_icon} alt="" /></div>
                                    <div className='flex justify-center font-semibold text-white'>Evening break</div>
                                    {showEB ? (
                                        <div className='flex justify-center font-semibold text-white  my-[10px] '><button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#03be79]' onClick={() => { handleUpdateE_out(attendance.admin_user) }}>Time out</button></div>

                                    ) : (

                                        <div className='flex justify-center font-semibold text-white  my-[10px] '><button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#9eb849]' onClick={() => { setshowEB(true); handleUpdateE_in(attendance.admin_user) }}>Time in</button></div>
                                    )}
                                    <div className='flex justify-center'><span className='text-white'>{attendance.e_break_in}</span><span className='text-white'>-</span><span className='text-white'>{attendance.e_break_out}</span></div>
                                </div>
                            )
                        })}
                        {attendance_details.length > 0 && attendance_details.map((attendance, index) => {
                            return (
                                <div className='bg-[#c726c7] w-[200px] mt-[10px] p-[6px] rounded-md border bg-center' style={{ backgroundImage: `url(${card5_image})` }}>
                                    <div className='flex justify-center'><img className='w-[50px]' src={card5_icon} alt="" /></div>
                                    <div className='flex justify-center font-semibold text-white'>Other break</div>
                                    {showOB ? (
                                        <div className='flex justify-center font-semibold text-white  my-[10px] '><button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#03be79]' onClick={() => { handleUpdateO_out(attendance.admin_user) }}>Time out</button></div>

                                    ) : (

                                        <div className='flex justify-center font-semibold text-white  my-[10px] '><button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#c726c7]' onClick={() => { setshowOB(true); handleUpdateO_in(attendance.admin_user) }}>Time in</button></div>
                                    )}
                                    <div className='flex justify-center'><span className='text-white'>{attendance.o_break_in}</span><span className='text-white'>-</span><span className='text-white'>{attendance.o_break_out}</span></div>
                                </div>
                            )
                        })}


                    </div>

                    <div className='flex justify-around mt-[30px]'>
                        <div>
                            <div className='flex'>
                                <div className='w-1/2 p-[3px]'>
                                    <div className='bg-[#f1f1f1] p-[4px] font-semibold text-[18px]'>Recent Project</div>
                                    <div className='p-[6px] rounded-md border bg-center' style={{ backgroundImage: `url(${abstract_img_2})` }}>
                                        <div className='flex justify-center py-[5px]'><img className='w-[40px]' src={productive_time} alt="" /></div>
                                        <div className='flex justify-center font-semibold text-white'>Project</div>
                                        <hr />
                                        <div className='flex justify-center mt-[5px]'><span className='text-white'>Work id:-</span><span className='text-white'>96546542</span></div>
                                        <div className='flex justify-center mt-[5px]'><span className='text-white'>Project name:- &nbsp;</span><span className='text-white'>website</span></div>
                                        <div className='flex justify-center mt-[5px]'><span className='text-white'>Task name:- &nbsp;</span><span className='text-white'>Web site design</span></div>
                                        <div className='flex justify-center font-semibold text-white  my-[10px] '><button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#c726c7]'>View</button></div>


                                    </div>
                                </div>
                                <div className='w-1/2 p-[3px]'>
                                    <div className='bg-[#f1f1f1] p-[4px] font-semibold text-[18px]'>Recent Ticket</div>
                                    <div className='p-[6px] rounded-md border bg-center' style={{ backgroundImage: `url(${abstract_img_2})` }}>
                                        <div className='flex justify-center py-[5px]'><img className='w-[40px]' src={productive_time} alt="" /></div>
                                        <div className='flex justify-center font-semibold text-white'>Ticket</div>
                                        <hr />
                                        <div className='flex justify-center mt-[5px]'><span className='text-white'>Ticket id:-</span><span className='text-white'>102345</span></div>
                                        <div className='flex justify-center mt-[5px]'><span className='text-white'>Subject:- &nbsp;</span><span className='text-white'>clear all the dues</span></div>
                                        <div className='flex justify-center mt-[5px]'><span className='text-white'>Assigned by:- &nbsp;</span><span className='text-white'>Neeraj chaudhary</span></div>
                                        <div className='flex justify-center font-semibold text-white  my-[10px] '><button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#c726c7]'>View</button></div>


                                    </div>
                                </div>
                            </div>
                            <div className='table mt-[15px]'>
                                <table className='min-w-[700px]' >
                                    <thead className='bg-[#f1f1f1]'>
                                        <tr className='border'>
                                            <th className='px-[10px] border-l-[2px] py-[7px]'>Name</th>
                                            <th className='px-[10px] border-l-[2px] py-[7px]'>Morning Break</th>
                                            <th className='px-[10px] border-l-[2px] py-[7px]'>Lunch Break</th>
                                            <th className='px-[10px] border-l-[2px] py-[7px]'>Evening Break</th>
                                            <th className='px-[10px] border-l-[2px] py-[7px]'>Other Break</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            attendance_details.length > 0 && attendance_details.map((attendance, index) => {

                                                // console.log(attendance.m_break_in)
                                                //find morning break
                                                var startTime = moment(attendance.m_break_in, 'HH:mm:ss ');
                                                var endTime = moment(attendance.m_break_out, 'HH:mm:ss ');
                                                // calculate total duration
                                                var duration = moment.duration(endTime.diff(startTime));
                                                // duration in hours
                                                var hours = parseInt(duration.asHours());
                                                // duration in minutes
                                                var minutes = parseInt(duration.asMinutes()) % 60;
                                                var seconds = parseInt(duration.asSeconds()) % 60;
                                                // alert(hours + ' hour and ' + minutes + ' minutes.');
                                                const getm_break = (hours + 'hr ' + minutes + 'min ' + seconds + "sec");


                                                //find lunch break
                                                var startTime = moment(attendance.l_break_in, 'HH:mm:ss ');
                                                var endTime = moment(attendance.l_break_out, 'HH:mm:ss ');
                                                // calculate total duration
                                                var duration = moment.duration(endTime.diff(startTime));
                                                // duration in hours
                                                var hours = parseInt(duration.asHours());
                                                // duration in minutes
                                                var minutes = parseInt(duration.asMinutes()) % 60;
                                                var seconds = parseInt(duration.asSeconds()) % 60;
                                                // alert(hours + ' hour and ' + minutes + ' minutes.');
                                                const getL_break = (hours + 'hr ' + minutes + 'min ' + seconds + "sec");


                                                //find evening break
                                                var startTime = moment(attendance.e_break_in, 'HH:mm:ss ');
                                                var endTime = moment(attendance.e_break_out, 'HH:mm:ss ');
                                                // calculate total duration
                                                var duration = moment.duration(endTime.diff(startTime));
                                                // duration in hours
                                                var hours = parseInt(duration.asHours());
                                                // duration in minutes
                                                var minutes = parseInt(duration.asMinutes()) % 60;
                                                var seconds = parseInt(duration.asSeconds()) % 60;
                                                // alert(hours + ' hour and ' + minutes + ' minutes.');
                                                const getE_break = (hours + 'hr ' + minutes + 'min ' + seconds + "sec");


                                                //find other break
                                                var startTime = moment(attendance.o_break_in, 'HH:mm:ss ');
                                                var endTime = moment(attendance.o_break_out, 'HH:mm:ss ');
                                                // calculate total duration
                                                var duration = moment.duration(endTime.diff(startTime));
                                                // duration in hours
                                                var hours = parseInt(duration.asHours());
                                                // duration in minutes
                                                var minutes = parseInt(duration.asMinutes()) % 60;
                                                var seconds = parseInt(duration.asSeconds()) % 60;
                                                // alert(hours + ' hour and ' + minutes + ' minutes.');
                                                const getO_break = (hours + 'hr ' + minutes + 'min ' + seconds + "sec");



                                                return (
                                                    <tr className='border' key={index}>
                                                        <td className='px-[10px] border-l-[2px] py-[7px] text-center'>{attendance.real_user.name}</td>
                                                        <td className='px-[10px] border-l-[2px] py-[7px] text-center'>{getm_break}</td>
                                                        <td className='px-[10px] border-l-[2px] py-[7px] text-center'>{getL_break}</td>
                                                        <td className='px-[10px] border-l-[2px] py-[7px] text-center'>{getE_break}</td>
                                                        <td className='px-[10px] border-l-[2px] py-[7px] text-center'>{getO_break}</td>

                                                    </tr>
                                                )
                                            })
                                        }




                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className='cards ml-[10px]'>
                            <div className='total time'>
                                {attendance_details.length > 0 && attendance_details.map((attendance, index) => {
                                    var d = moment.duration(attendance.time_in).add(moment.duration('09:00:00'))
                                    const time = moment.utc(d.as('milliseconds')).format("HH:mm:ss")
                                    console.log(time);
                                    return (
                                        <div className=' w-[250px]  p-[6px] rounded-md border bg-center' style={{ backgroundImage: `url(${abstract_img})` }}>
                                            <div className='flex justify-center py-[5px]'><img className='w-[40px]' src={total_time_icon} alt="" /></div>
                                            <div className='flex justify-center font-semibold text-white'>Total time</div>
                                            <div className='flex justify-center'><span className='text-white'>{attendance.time_in}</span><span className='text-white'>-</span><span className='text-white'>{time}</span></div>
                                        </div>
                                    )
                                })}

                            </div>


                            <div className='total time remaining'>
                                {attendance_details.length > 0 && attendance_details.map((attendance, index) => {
                                    //calculate total  time
                                    var d = moment.duration(attendance.time_in).add(moment.duration('09:00:00'))
                                    const total_time = moment.utc(d.as('milliseconds')).format("HH:mm:ss")
                                    // console.log(total_time)


                                    //calculation for all the break
                                    var m_break = moment.duration(attendance.m_break_in).add(moment.duration(attendance.m_break_out))
                                    const m_break_time = moment.utc(m_break.as('milliseconds')).format("HH:mm:ss")
                                    // console.log(time);

                                    var l_break = moment.duration(attendance.l_break_in).add(moment.duration(attendance.l_break_out))
                                    const l_break_time = moment.utc(l_break.as('milliseconds')).format("HH:mm:ss")

                                    var e_break = moment.duration(attendance.e_break_in).add(moment.duration(attendance.e_break_out))
                                    const e_break_time = moment.utc(e_break.as('milliseconds')).format("HH:mm:ss")

                                    var o_break = moment.duration(attendance.o_break_in).add(moment.duration(attendance.o_break_out))
                                    const o_break_time = moment.utc(o_break.as('milliseconds')).format("HH:mm:ss")

                                    var m_and_l_break = moment.duration(m_break_time).add(moment.duration(o_break_time))
                                    const m_and_l_break_time = moment.utc(m_and_l_break.as('milliseconds')).format("HH:mm:ss")

                                    var e_and_o_break = moment.duration(e_break_time).add(moment.duration(l_break_time))
                                    const e_and_o_break_time = moment.utc(e_and_o_break.as('milliseconds')).format("HH:mm:ss")

                                    var all_break_total = moment.duration(m_and_l_break_time).add(moment.duration(e_and_o_break_time))
                                    const all_break_total_time = moment.utc(all_break_total.as('milliseconds')).format("HH:mm:ss")

                                    //calculation for productive time
                                    const momentTime = moment().format("HH:mm:ss")
                                    //find other break
                                    var startTime = moment(attendance.time_in, 'HH:mm:ss ');
                                    var endTime = moment(momentTime, 'HH:mm:ss ');
                                    // calculate total duration
                                    var duration = moment.duration(endTime.diff(startTime));
                                    // duration in hours
                                    var hours = parseInt(duration.asHours());
                                    // duration in minutes
                                    var minutes = parseInt(duration.asMinutes()) % 60;
                                    var seconds = parseInt(duration.asSeconds()) % 60;
                                    // alert(hours + ' hour and ' + minutes + ' minutes.');
                                    const productive_hours = (hours + 'hr ' + minutes + 'min ' + seconds + "sec");
                                    console.log(productive_hours)


                                    //calculation for time remaining
                                    //find other break
                                    var startTime = moment(momentTime, 'HH:mm:ss ');
                                    var endTime = moment(total_time, 'HH:mm:ss ');
                                    // calculate total duration
                                    var duration = moment.duration(endTime.diff(startTime));
                                    // duration in hours
                                    var hours = parseInt(duration.asHours());
                                    // duration in minutes
                                    var minutes = parseInt(duration.asMinutes()) % 60;
                                    var seconds = parseInt(duration.asSeconds()) % 60;
                                    // alert(hours + ' hour and ' + minutes + ' minutes.');
                                    const time_remaining = (hours + 'hr ' + minutes + 'min ' + seconds + "sec");
                                    console.log(time_remaining)


                                    return (
                                        <div className=' w-[250px] mt-[10px] p-[6px] rounded-md border bg-center' style={{ backgroundImage: `url(${abstract_img_1})` }}>
                                            <div className='flex justify-center py-[5px]'><img className='w-[40px]' src={remaining_time} alt="" /></div>
                                            <div className='flex justify-center font-semibold text-white'>Total time remaining</div>
                                            <div className='flex justify-center'><span className='text-white'>{time_remaining}</span></div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='productive hours'>
                                {attendance_details.length > 0 && attendance_details.map((attendance, index) => {
                                    var d = moment.duration(attendance.time_in).add(moment.duration('09:00:00'))
                                    const time = moment.utc(d.as('milliseconds')).format("HH:mm:ss")
                                    // console.log(time)

                                    //calculation for productive time


                                    //calculation for productive time
                                    const momentTime = moment().format("HH:mm:ss")
                                    //find other break
                                    var startTime = moment(attendance.time_in, 'HH:mm:ss ');
                                    var endTime = moment(momentTime, 'HH:mm:ss ');
                                    // calculate total duration
                                    var duration = moment.duration(endTime.diff(startTime));
                                    // duration in hours
                                    var hours = parseInt(duration.asHours());
                                    // duration in minutes
                                    var minutes = parseInt(duration.asMinutes()) % 60;
                                    var seconds = parseInt(duration.asSeconds()) % 60;
                                    // alert(hours + ' hour and ' + minutes + ' minutes.');
                                    const productive_hours = (hours + 'hr ' + minutes + 'min ' + seconds + "sec");
                                    // console.log(productive_hours)




                                    return (
                                        <div className=' w-[250px] mt-[10px] p-[6px] rounded-md border bg-center' style={{ backgroundImage: `url(${abstract_img_2})` }}>
                                            <div className='flex justify-center py-[5px]'><img className='w-[40px]' src={productive_time} alt="" /></div>
                                            <div className='flex justify-center font-semibold text-white'>Productive hours</div>
                                            <div className='flex justify-center'><span className='text-white'>{productive_hours}</span></div>
                                        </div>
                                    )
                                })}
                            </div>


                        </div>
                    </div>

                </div>

            </Menu>



        </div>
    )
}

export default Dashboard
