import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import "./Task.css";

const Task = ({ task, handletaskClick, handletaskDeletion }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handletaskClick(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
        <button className="see-task-details-buttton">
          <CgInfo />
        </button>
        <button
          className="remove-task-buttton"
          onClick={() => handletaskDeletion(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Task;
