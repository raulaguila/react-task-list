import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddTask from "./components/AddTask";

import "./App.css";

const App = () => {
  // let message = "Hello world !";
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Ler Livros",
      completed: true,
    },
  ]);

  const handletaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  };

  const handletaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id != taskId);

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        completed: false,
      },
    ];

    // console.log(newTask);
    setTasks(newTasks);
  };

  return (
    <div>
      <div className="container">
        <Header />
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks
          tasks={tasks}
          handletaskClick={handletaskClick}
          handletaskDeletion={handletaskDeletion}
        />
      </div>
    </div>
  );
};

export default App;
