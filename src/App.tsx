import { useState } from "react";
import type { Task } from "./types/task";
import { TaskList } from "./components/TaskList";
import CreateNewTask from "./components/CreateNewTask/CreateNewTask";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Thêm Task
  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  // Xóa Task
  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <div className="header">
        <div>
          <h1>Task Manager Mini</h1>
        </div>
      </div>
      <CreateNewTask onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
