import React from 'react'
import { useNavigate } from 'react-router-dom'
import Inputs from './Inputs';

function Home(){
   const navigate = useNavigate();
    function handleSubmit(e) {
    e.preventDefault();
    navigate('/inputs');


  }
  return (
    <div className='bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 w-380 h-180'> <br /><br /><br /><br /><br /><br /><br /><br />
    <div className='font-bold text-xl text-white mt-20'>
        <h1>Welcome to <span className='text-indigo-500 uppercase italic'>music stitch</span></h1>
        <p className='ml-20'>Get to journal your favourite jams all at</p>
    </div>
    <div className='w-160 ml-210 -mt-50 '>
       <img src="src\assets\images\Music.jpg" alt="" className='rounded-2xl' />
    </div>
    <div className='-mt-20 ml-10'>
        <button onClick={handleSubmit} className='text-gray-100 bg-gray-100'>GET STARTED</button>
    </div>
    </div>
    
    
  )
}


export default Home