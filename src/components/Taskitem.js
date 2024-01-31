
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
      <div>
        <strong>{task.title}</strong>
        <p>{task.description}</p>
        <p>Due Date: {task.dueDate}</p>
        <p>Status: {task.status}</p>
        <button onClick={handleEditStatus}>Edit Status</button>

        {isEditing && <TaskForm taskToEdit={task} onSubmit={handleEditTask} />}
      </div>
    </li>
  );
};

export default TaskItem;
