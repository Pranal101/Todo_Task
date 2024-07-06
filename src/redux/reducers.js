const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};
//retrieve from local storage if tasks available
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = {
        id: Date.now(),
        name: action.payload.task,
        completed: false,
      };
      const updatedTasks = [...state.tasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };
    case "DELETE_TASK":
      const tasksAfterDelete = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );
      localStorage.setItem("tasks", JSON.stringify(tasksAfterDelete)); //store in local storage
      return {
        ...state,
        tasks: tasksAfterDelete,
      };
    case "EDIT_TASK":
      const tasksAfterEdit = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, name: action.payload.task }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(tasksAfterEdit));
      return {
        ...state,
        tasks: tasksAfterEdit,
      };
    case "TOGGLE_TASK_COMPLETION":
      const tasksAfterToggle = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(tasksAfterToggle));
      return {
        ...state,
        tasks: tasksAfterToggle,
      };
    default:
      return state;
  }
};

export default tasksReducer;
