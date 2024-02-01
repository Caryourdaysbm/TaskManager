import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from './Taskitem';
import TaskForm from './TaskForm';

import { filterTasks } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const filteredStatus = useSelector((state) => state.filteredStatus);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const dispatch = useDispatch();

  const openEditForm = (task) => {
    setTaskToEdit(task);
  };

  // const closeForm = () => {
  //   setTaskToEdit(null);
  // };

  const handleFilter = (e) => {
    const selectedStatus = e.target.value;
    dispatch(filterTasks(selectedStatus));
  };

  return (
    <div>
     
      <TaskForm taskToEdit={taskToEdit} />
      <h3 className='font-bold text-3xl mt-9'>List of Tasks</h3>
      <label>Filter by Status: </label>
      <select value={filteredStatus} onChange={handleFilter} className='text-[#6E2208] rounded-sm'>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>   
      <ul>
        <div>
        {tasks
          .filter((task) => (filteredStatus === 'all' ? true : task.status === filteredStatus))
          .map((task) => (
            <div className='bg-[#FFF3D9] text-[#6E2208] rounded-lg'><TaskItem key={task.id} task={task} openEditForm={openEditForm} /></div>
          ))}
        </div>
      </ul>

      
    </div>
  );
};

export default TaskList;
