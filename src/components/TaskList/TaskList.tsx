import type { Task } from "../../types/task";
import "./TaskList.css";

interface Props {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onToggleTask: (id: number) => void;
}

export const TaskList = ({ tasks, onDeleteTask, onToggleTask }: Props) => {
  if (tasks.length === 0) {
    return <p style={{ marginTop: "20px" }}>No tasks</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
          />

          <span
            className="task-title"
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              opacity: task.completed ? 0.6 : 1,
            }}
          >
            {task.title}
          </span>

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
