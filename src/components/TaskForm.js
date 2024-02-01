import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../redux/actions';
import { Link } from 'react-router-dom';

const TaskForm = ({ taskToEdit, onSubmit }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : '');
  const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : '');
  const [dueDate, setDueDate] = useState(taskToEdit ? taskToEdit.dueDate : '');
  const [status, setStatus] = useState(taskToEdit ? taskToEdit.status : 'pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = { title, description, dueDate, status };

    if (taskToEdit) {
      dispatch(editTask({ id: taskToEdit.id, ...taskData }));
    } else {
      dispatch(addTask(taskData));
    }

    // Reset form fields after submission
    setTitle('');
    setDescription('');
    setDueDate('');
    setStatus('pending');

      // If onSubmit prop is provided, call it with the updated task
      if (onSubmit) {
        onSubmit({ ...taskToEdit, ...taskData });
      }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
      <label >Title:</label>
      <input type="text" className='text-[#6E2208]' value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label>Description:</label>
      <textarea value={description}  className='text-[#6E2208]' onChange={(e) => setDescription(e.target.value)} required />

      <label>Due Date:</label>
      <input type="date" value={dueDate}  className='text-[#6E2208]' onChange={(e) => setDueDate(e.target.value)} required />

      <div className='flex justify-center gap-2'>
      <label className='p-1'> Select Status: </label>
      <div>
        <button
          type="button"
          className='rounded-sm p-1'
          onClick={() => setStatus('pending')}
          style={{ background: status === 'pending' ? '#3498db' : 'transparent' }}
        >
          Pending
        </button>
        <button
          type="button"
          className='rounded-sm p-1'
          onClick={() => setStatus('completed')}
          style={{ background: status === 'completed' ? '#2ecc71' : 'transparent' }}
        >
          Completed
        </button>
      </div>

      </div>
      <button type="submit" className="bg-[#2ecc71] text-[#6E2208] rounded-md p-2 w-[50%]">{taskToEdit ? 'Submit' : 'Add Task'}</button>

    </form>
  );
};

export default TaskForm;
