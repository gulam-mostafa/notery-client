import React from 'react';
import { GiElectric, } from 'react-icons/gi';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { GrFormLocation } from 'react-icons/gr';

const Home = () => {
  return (
    <div className='bg-violet-900 min-h-screen rounded-tl-2xl rounded-bl-2xl'>
      <div className=''>
        <div className='flex justify-center py-8 gap-2'>
          <p className='bg-yellow-500 rounded-full p-2 '><GiElectric /></p>
          <p className='text-xl font-bold text-yellow-400'>Beinsurance</p>
        </div>
        <div className='flex justify-center mb-4'>
          <img className='rounded-full  py- h-20 w-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKP-tXQt1QxVweQzTPxxZ1Y2d28FP5BSb8rg&usqp=CAU" alt="" />
        </div>
        <p className='text-center font-bold text-2xl mb-8  text-white'>Jacob Jones</p>
        <div className='flex justify-start ml-8 gap-6 items-center my-2 text-white'>
          <p><AiOutlineMail /></p>
          <p>Jackson.jn@mial.com</p>
        </div>
        <div className='flex justify-start ml-8 gap-6 items-center my-2 text-white'>
          <p><FiPhoneCall /></p>
          <p> (316)555-0115</p>
        </div>
        <div className='flex justify-start ml-8 gap-6 items-center my-2 text-white'>
          <p><GrFormLocation /></p>
          <p>3891 Ronchview Dr. Richordson, <br /> California 62639</p>
        </div>
        <div className='flex justify-start ml-8 gap-6 items-center my-2 text-white'>
          <p><CgProfile /></p>
          <p>Insurance ID 24792492</p>
        </div>

      </div>
    </div>
  );
};

export default Home;