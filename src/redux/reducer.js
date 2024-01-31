
const initialState = {
    tasks: [],
    filteredStatus: 'all',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
  
      case 'EDIT_TASK':
        const updatedTasks = state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        );
  
        return {
          ...state,
          tasks: updatedTasks,
        };
  
      case 'FILTER_TASKS':
        return {
          ...state,
          filteredStatus: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  