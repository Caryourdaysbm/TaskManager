import React from 'react';

import Layout from '../components/Layout';
import TaskList from '../components/Tasklist';
import TaskForm from '../components/TaskForm';
import { Link } from 'react-router-dom';

function Task() {
    
 
  return (
    <div className='flex flex-col justify-center items-center  m-14'>
      <h1 className='font-bold text-3xl' >Task</h1>
      <p >Create new tasks here</p>
  
            
          

          <Layout>
      <h1>Task Management Dashboard</h1>
      <TaskList />
    </Layout>

    <button className='bg-[#FFF3D9] text-black rounded-md p-2'><Link to="/">Go back Home</Link></button>
    </div>
  );
}

export default Task;
