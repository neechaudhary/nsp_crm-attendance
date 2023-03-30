import React from 'react'
import Menu from './Menu'

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









const Dashboard = () => {
    return (
        <div  >
            <Menu>
                <div>
                    <div className='w-full pt-[10px] flex justify-around flex-wrap '>
                        <div className='w-[200px] mt-[10px] p-[6px] rounded-md border' style={{ backgroundImage: `url(${card_image})`, objectFit: 'fit' }}>
                            <div className='flex justify-center'><img className='w-[50px]' src={card1_icon} alt="" /></div>
                            <div className='flex justify-center font-semibold text-white'>Mark attendace</div>
                            <div className='flex justify-center font-semibold text-white  my-[10px] '><button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#03be79]'>Time in</button></div>
                            <div className='flex justify-center'><span className='text-white'>9:12</span><span className='text-white'>-</span><span className='text-white'>9:12</span></div>
                        </div>
                        <div className='bg-[#f56954] w-[200px] mt-[10px] p-[6px] rounded-md border bg-center' style={{ backgroundImage: `url(${card2_image})`, }}>
                            <div className='flex justify-center'><img className='w-[50px]' src={card2_icon} alt="" /></div>
                            <div className='flex justify-center font-semibold text-white'>Morning break</div>
                            <div className='flex justify-center font-semibold text-white  my-[10px] '><button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#f56954]'>Time in</button></div>
                            <div className='flex justify-center'><span className='text-white'>9:12</span><span className='text-white'>-</span><span className='text-white'>9:12</span></div>
                        </div>
                        <div className='bg-[#00c0ef] w-[200px] mt-[10px] p-[6px] rounded-md border bg-center' style={{ backgroundImage: `url(${card3_image})` }}>
                            <div className='flex justify-center'><img className='w-[50px]' src={card3_icon} alt="" /></div>
                            <div className='flex justify-center font-semibold text-white'>Lunch break</div>
                            <div className='flex justify-center font-semibold text-white  my-[10px] '><button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#00c0ef]'>Time in</button></div>
                            <div className='flex justify-center'><span className='text-white'>9:12</span><span className='text-white'>-</span><span className='text-white'>9:12</span></div>
                        </div>
                        <div className='bg-[#9eb849] w-[200px] mt-[10px] p-[6px] rounded-md border ' style={{ backgroundImage: `url(${card4_image})`, objectFit: "contain" }}>
                            <div className='flex justify-center'><img className='w-[50px]' src={card4_icon} alt="" /></div>
                            <div className='flex justify-center font-semibold text-white'>Evening break</div>
                            <div className='flex justify-center font-semibold text-white  my-[10px] '><button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#9eb849]'>Time in</button></div>
                            <div className='flex justify-center'><span className='text-white'>9:12</span><span className='text-white'>-</span><span className='text-white'>9:12</span></div>
                        </div>
                        <div className='bg-[#c726c7] w-[200px] mt-[10px] p-[6px] rounded-md border bg-center' style={{ backgroundImage: `url(${card5_image})` }}>
                            <div className='flex justify-center'><img className='w-[50px]' src={card5_icon} alt="" /></div>
                            <div className='flex justify-center font-semibold text-white'>Other break</div>
                            <div className='flex justify-center font-semibold text-white  my-[10px] '><button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#c726c7]'>Time in</button></div>
                            <div className='flex justify-center'><span className='text-white'>9:12</span><span className='text-white'>-</span><span className='text-white'>9:12</span></div>
                        </div>


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
                                        <tr className='border'>
                                            <td className='px-[10px] border-l-[2px] py-[7px] text-center'>chamkeela</td>
                                            <td className='px-[10px] border-l-[2px] py-[7px] text-center'>25</td>
                                            <td className='px-[10px] border-l-[2px] py-[7px] text-center'>25</td>
                                            <td className='px-[10px] border-l-[2px] py-[7px] text-center'>25</td>
                                            <td className='px-[10px] border-l-[2px] py-[7px] text-center'>not availed</td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className='cards ml-[10px]'>
                            <div className='total time'>
                                <div className=' w-[250px]  p-[6px] rounded-md border bg-center' style={{ backgroundImage: `url(${abstract_img})` }}>
                                    <div className='flex justify-center py-[5px]'><img className='w-[40px]' src={total_time_icon} alt="" /></div>
                                    <div className='flex justify-center font-semibold text-white'>Total time</div>
                                    <div className='flex justify-center'><span className='text-white'>9:12</span><span className='text-white'>-</span><span className='text-white'>9:12</span></div>
                                </div>
                            </div>
                            <div className='total time remaining'>
                                <div className=' w-[250px] mt-[10px] p-[6px] rounded-md border bg-center' style={{ backgroundImage: `url(${abstract_img_1})` }}>
                                    <div className='flex justify-center py-[5px]'><img className='w-[40px]' src={remaining_time} alt="" /></div>
                                    <div className='flex justify-center font-semibold text-white'>Total time remaining</div>
                                    <div className='flex justify-center'><span className='text-white'>9:12</span><span className='text-white'>-</span><span className='text-white'>9:12</span></div>
                                </div>
                            </div>
                            <div className='productive hours'>
                                <div className=' w-[250px] mt-[10px] p-[6px] rounded-md border bg-center' style={{ backgroundImage: `url(${abstract_img_2})` }}>
                                    <div className='flex justify-center py-[5px]'><img className='w-[40px]' src={productive_time} alt="" /></div>
                                    <div className='flex justify-center font-semibold text-white'>Productive hours</div>
                                    <div className='flex justify-center'><span className='text-white'>9:12</span><span className='text-white'>-</span><span className='text-white'>9:12</span></div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>



            </Menu>



        </div>
    )
}

export default Dashboard
