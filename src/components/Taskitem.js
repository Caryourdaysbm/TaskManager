
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TaskForm from './TaskForm';
import { editTask } from '../redux/actions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);

  const handleEditStatus = () => {
    setEditing(true);
  };

  const handleEditTask = (updatedTask) => {
    dispatch(editTask(updatedTask));
    setEditing(false);
  };

  return (
    <li>
      <div className='flex flex-col p-2 m-2'>
        <strong>{task.title}</strong>
        <p>{task.description}</p>
        <p> <span className='font-bold'>Due Date: </span>{task.dueDate}</p>
        <p><span className='font-bold'>Status: </span> {task.status}</p>
        <button className='bg-[#6E2208] text-[#FFF3D9] rounded-md p-2' onClick={handleEditStatus}>Edit Status</button>

        {isEditing && <TaskForm taskToEdit={task} onSubmit={handleEditTask} />}
      </div>
    </li>
  );
};

export default TaskItem;
