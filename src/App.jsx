import React from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskCounter from "./components/TaskCounter";

function App() {
  return (
    <div className="app">
      <TaskCounter />
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
