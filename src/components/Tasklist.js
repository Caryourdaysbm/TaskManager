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
      <label>Filter by Status: </label>
      <select value={filteredStatus} onChange={handleFilter}>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>   
      <ul>
        {tasks
          .filter((task) => (filteredStatus === 'all' ? true : task.status === filteredStatus))
          .map((task) => (
            <TaskItem key={task.id} task={task} openEditForm={openEditForm} />
          ))}
      </ul>

      
    </div>
  );
};

export default TaskList;
