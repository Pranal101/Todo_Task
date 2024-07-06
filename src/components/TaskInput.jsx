import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); //Prevent Default submissions
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Write your next task"
      />
      <button type="submit">
        <AddCircleOutlineIcon />
      </button>
    </form>
  );
};

export default TaskInput;
