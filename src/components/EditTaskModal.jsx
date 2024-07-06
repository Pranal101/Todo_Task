import React from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/actions";
import "./EditModal.css";

const EditTaskModal = ({ isOpen, onClose, task }) => {
  const [taskName, setTaskName] = React.useState(task.name);
  const dispatch = useDispatch();

  const handleSaveEdit = () => {
    dispatch(editTask(task.id, taskName));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Task</h2>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <div className="modal-buttons">
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
