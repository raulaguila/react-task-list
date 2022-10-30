import React from "react";

import Task from "./Task";

const Tasks = ({ tasks, handletaskClick, handletaskDeletion }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          task={task}
          handletaskClick={handletaskClick}
          handletaskDeletion={handletaskDeletion}
        />
      ))}
    </div>
  );
};

export default Tasks;
