import type { Task } from "../types/task";

interface Props {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
}

export const TaskList = ({ tasks, onDeleteTask }: Props) => {
  if (tasks.length === 0) {
    return <p style={{ marginTop: "20px" }}>No tasks</p>;
  }

  return (
    <ul style={{ marginTop: "20px" }}>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}
          <button onClick={() => onDeleteTask(task.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};
