import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTaskCompletion } from "../redux/actions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import EditTaskModal from "./EditTaskModal";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [editTask, setEditTask] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleCompletion = (id) => {
    dispatch(toggleTaskCompletion(id));
  };

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div>
      <div className="listDiv">
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              <button onClick={() => handleToggleCompletion(task.id)}>
                {task.completed ? (
                  <CheckCircleOutlineIcon style={{ color: "green" }} />
                ) : (
                  <RadioButtonUncheckedIcon style={{ color: "red" }} />
                )}
              </button>
              <span>{task.name}</span>
              <div>
                <button onClick={() => setEditTask(task)}>
                  <EditIcon />
                </button>
                <button onClick={() => handleDelete(task.id)}>
                  <DeleteIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {editTask && (
        <EditTaskModal
          isOpen={!!editTask}
          onClose={() => setEditTask(null)}
          task={editTask}
        />
      )}
    </div>
  );
};

export default TaskList;
