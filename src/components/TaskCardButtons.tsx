import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { done, remove } from "../features/taskList/taskListSlice";
import Tooltip from "@mui/material/Tooltip";
import { Task } from "../features/taskList/taskListSlice";
// import { Icons } from 'material-table';

interface Props {
  task: Task;
}

const TaskCardButtons = ({ task }: Props) => {
  const dispatch = useDispatch();
  const handleDoneClick = (): void => {
    dispatch(done(task.id));
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
            <DoneIcon />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit title" placement="top">
        <IconButton
          onClick={() => {
            // setEditBox(!editBox);
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
            // handleDeleteClick();
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
