import { useState } from "react";
import { Button, TextField } from "@mui/material";

interface Props {
  onAddTask: (title: string) => void;
}

const CreateNewTask = ({ onAddTask }: Props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) return;
    onAddTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <TextField
        size="small"
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button type="submit" variant="contained">
        Add
      </Button>
    </form>
  );
};

export default CreateNewTask;
