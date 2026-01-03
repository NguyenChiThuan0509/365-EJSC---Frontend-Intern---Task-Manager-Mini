import type { Task } from "../../types/task";
import "./TaskList.css";

interface Props {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
}

export const TaskList = ({ tasks, onDeleteTask }: Props) => {
  if (tasks.length === 0) {
    return <p style={{ marginTop: "20px" }}>No tasks</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <span className="task-title">{task.title}</span>
          <button
            className="task-delete-btn"
            onClick={() => onDeleteTask(task.id)}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};
