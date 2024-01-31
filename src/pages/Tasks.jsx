import React from 'react';

import Layout from '../components/Layout';
import TaskList from '../components/Tasklist';
import TaskForm from '../components/TaskForm';
import { Link } from 'react-router-dom';

function Task() {
    
 
  return (
    <div>
      <h1>Task</h1>
      <p>Welcome to the task page!</p>
      <li>
            <Link to="/">Home</Link>
          </li>

          <Layout>
      <h1>Task Management Dashboard</h1>
      <TaskList />
    </Layout>
    </div>
  );
}

export default Task;
