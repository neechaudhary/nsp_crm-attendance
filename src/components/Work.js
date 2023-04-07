import React, { useState } from 'react'
import Menu from './Menu'


//icons

import { MdLockClock } from 'react-icons/md'

//images
import productive_time from "./../assets/productive.png"
import abstract_img_2 from "./../assets/abstract_background_2.webp"

const Work = () => {
  const [ongoing, setOngoing] = useState([])

  return (
    <div>
      <Menu>
        <div>
          <div className='container_for_pending'>
            <div className=' mt-[10px]'>
              <div className='flex  justify-between border-b-2 py-[5px]'>
                <div className='flex'>
                  <div className='ongoing_icon bg-[#4674D6]  flex justify-center items-center w-[30px] rounded-md'><MdLockClock size={20} className='text-white' /></div>
                  <div className='flex items-center ml-[10px] font-semibold text-[16px]'><h1>Pending Projects</h1></div>
                </div>
                <div className='flex items-center'>
                  <button className='bg-[#4674D6] text-white px-[10px] py-[5px] rounded-md hover:bg-[#ffffff] hover:text-[#c726c7]'>View all</button>
                </div>
              </div>
              <div className='ongoing_card mt-[5px]'>
                <div className='flex flex-wrap justify-around mt-[20px]'>
                  {ongoing.length == 0 && (

                    <div className='w-[30%] p-[6px] rounded-md border bg-center' style={{ backgroundImage: `url(${abstract_img_2})` }}>
                      <div className='flex justify-center py-[5px]'><img className='w-[40px]' src={productive_time} alt="" /></div>
                      <div className='flex justify-center font-semibold text-white'>Project</div>
                      <hr />
                      <div className='flex justify-center mt-[5px]'><span className='text-white'>Work id:-</span><span className='text-white'>dummy96546542</span></div>
                      <div className='flex justify-center mt-[5px]'><span className='text-white'>Project name:- &nbsp;</span><span className='text-white'>website</span></div>
                      <div className='flex justify-center mt-[5px]'><span className='text-white'>Task name:- &nbsp;</span><span className='text-white'>Web site design</span></div>
                      <div className='flex justify-between font-semibold text-white  my-[10px] '>
                        <button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#c726c7]'>Start</button>
                        <button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#c726c7]'>Completed</button>
                      </div>
                    </div>
                  )}
                  {/* {ongoing.length > 0 && ongoing.map((item, index) => ( */}

                  <div className='w-[30%] p-[6px] rounded-md border bg-center' style={{ backgroundImage: `url(${abstract_img_2})` }}>
                    <div className='flex justify-center py-[5px]'><img className='w-[40px]' src={productive_time} alt="" /></div>
                    <div className='flex justify-center font-semibold text-white'>Project</div>
                    <hr />
                    <div className='flex justify-center mt-[5px]'><span className='text-white'>Work id:-</span><span className='text-white'>96546542</span></div>
                    <div className='flex justify-center mt-[5px]'><span className='text-white'>Project name:- &nbsp;</span><span className='text-white'>website</span></div>
                    <div className='flex justify-center mt-[5px]'><span className='text-white'>Task name:- &nbsp;</span><span className='text-white'>Web site design</span></div>
                    <div className='flex justify-between font-semibold text-white  my-[10px] '>
                        <button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#c726c7]'>Start</button>
                        <button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#c726c7]'>Completed</button>
                      </div>
                  </div>
                  <div className='w-[30%] p-[6px] rounded-md border bg-center' style={{ backgroundImage: `url(${abstract_img_2})` }}>
                    <div className='flex justify-center py-[5px]'><img className='w-[40px]' src={productive_time} alt="" /></div>
                    <div className='flex justify-center font-semibold text-white'>Project</div>
                    <hr />
                    <div className='flex justify-center mt-[5px]'><span className='text-white'>Work id:-</span><span className='text-white'>96546542</span></div>
                    <div className='flex justify-center mt-[5px]'><span className='text-white'>Project name:- &nbsp;</span><span className='text-white'>website</span></div>
                    <div className='flex justify-center mt-[5px]'><span className='text-white'>Task name:- &nbsp;</span><span className='text-white'>Web site design</span></div>
                    <div className='flex justify-between font-semibold text-white  my-[10px] '>
                        <button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#c726c7]'>Start</button>
                        <button className='border w-[100px] hover:bg-[#ffffff] hover:text-[#c726c7]'>Completed</button>
                      </div>
                  </div>

                  {/* ))} */}

                </div>

                

              </div>
            </div>
          </div>

        </div>

      </Menu>
    </div>
  )
}

export default Work
