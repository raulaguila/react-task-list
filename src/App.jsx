import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import taskDetails from "./components/TaskDetails";

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

  useEffect(() => {
    // console.log(tasks)
  }, [tasks]);

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
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => {
            return (
              <div>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handletaskClick={handletaskClick}
                  handletaskDeletion={handletaskDeletion}
                />
              </div>
            );
          }}
        />

        <Route path="/:taskTitle" exact component={taskDetails} />
      </div>
    </Router>
  );
};

export default App;
