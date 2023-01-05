import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { edit, Task } from "../features/taskList/taskListSlice";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useEffect } from "react";

interface Props {
  editDialog: boolean;
  setEditDialog: React.Dispatch<React.SetStateAction<boolean>>;
  task: Task;
}

const EditDialog = ({ editDialog, setEditDialog, task }: Props) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<Task>({
    name: task.name,
    id: task.id,
    done: task.done,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    dispatch(edit(input));

    setEditDialog(false);
  };
  useEffect(() => {
    console.log(input);
  }, [input]);
  return (
    <div>
      <Dialog open={editDialog}>
        <DialogTitle>Enter new task name</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task name"
            type="text"
            fullWidth
            variant="standard"
            name="name"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              // setTaskDialog(false);
            }}
          >
            Cancel
          </Button>
          <Button onClick={() => handleClick()}>Edit task</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditDialog;
