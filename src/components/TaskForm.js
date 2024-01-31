import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../redux/actions';

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
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

      <label>Due Date:</label>
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />

      <label>Status:</label>
      <div>
        <button
          type="button"
          onClick={() => setStatus('pending')}
          style={{ background: status === 'pending' ? '#3498db' : 'transparent' }}
        >
          Pending
        </button>
        <button
          type="button"
          onClick={() => setStatus('completed')}
          style={{ background: status === 'completed' ? '#2ecc71' : 'transparent' }}
        >
          Completed
        </button>
      </div>

      <button type="submit">{taskToEdit ? 'Submit' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;