export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const editTask = (task) => ({
    type: 'EDIT_TASK',
    payload: task,
  });
  
  export const filterTasks = (status) => ({
    type: 'FILTER_TASKS',
    payload: status,
  });