import React from "react";
import { useSelector } from "react-redux";

const TaskCounter = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="task-counter">
      <div className="counter-text">
        <h2>Tasks Done</h2>
        <p>keep it up</p>
      </div>
      <div className="counter-number">
        {completedTasks}/{tasks.length}
      </div>
    </div>
  );
};

export default TaskCounter;
