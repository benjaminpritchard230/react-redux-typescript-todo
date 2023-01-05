import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import { useDispatch } from "react-redux";
import { done, remove, Task } from "../features/taskList/taskListSlice";
// import { Icons } from 'material-table';

interface Props {
  task: Task;
  editDialog: boolean;
  setEditDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskCardButtons = ({ task, editDialog, setEditDialog }: Props) => {
  const dispatch = useDispatch();
  const handleDoneClick = (): void => {
    dispatch(done(task));
  };
  const handleDeleteClick = (): void => {
    dispatch(remove(task));
  };
  const handleEditClick = () => {
    setEditDialog(true);
  };
  return (
    <Stack
      direction="row"
      justifyContent={"flex-end"}
      alignItems="center"
      spacing={1}
    >
      <Tooltip title="Done" placement="top">
        <IconButton
          onClick={() => {
            handleDoneClick();
          }}
        >
          <Avatar>
            <DoneIcon sx={task.done ? { color: "green" } : { color: "none" }} />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit title" placement="top">
        <IconButton
          onClick={() => {
            handleEditClick();
          }}
        >
          <Avatar>
            <EditIcon sx={{ "&:hover": { color: "yellow" } }} />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete" placement="top">
        <IconButton
          onClick={() => {
            handleDeleteClick();
          }}
        >
          <Avatar>
            <DeleteIcon sx={{ "&:hover": { color: "red" } }} />
          </Avatar>
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default TaskCardButtons;
