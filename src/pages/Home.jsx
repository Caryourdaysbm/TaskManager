import React from 'react';



import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='flex flex-col justify-center items-center  m-14'>
      <h1 className='font-bold text-3xl'>Home</h1>
      <p>Welcome to the Task Management board by sbm</p>
      <button className='bg-[#FFF3D9] text-black rounded-md px-6 '><Link to="/task" >New task</Link></button>
            
        
    </div>
  );
}

export default Home;
