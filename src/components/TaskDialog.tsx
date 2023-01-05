import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { save, Task } from "../features/taskList/taskListSlice";

interface Props {
  taskDialog: boolean;
  setTaskDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskDialog = ({ taskDialog, setTaskDialog }: Props) => {
  const dispatch = useDispatch();
  const id = uuidv4();
  const [input, setInput] = useState<Task>({
    name: "",
    id: "",
    done: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      id: id,
    });
  };

  const handleClick = (): void => {
    setTaskDialog(false);
    dispatch(save(input));
  };

  return (
    <div>
      <Dialog open={taskDialog}>
        <DialogTitle>Enter task name</DialogTitle>
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
              setTaskDialog(false);
            }}
          >
            Cancel
          </Button>
          <Button onClick={() => handleClick()}>Create task</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskDialog;
