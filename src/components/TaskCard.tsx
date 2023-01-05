import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { edit, Task } from "../features/taskList/taskListSlice";
import EditDialog from "./EditDialog";
import TaskCardButtons from "./TaskCardButtons";

interface Props {
  task: Task;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const style = {
  justifyContent: "right",
  alignItems: "end",
};

const TaskCard = ({ task }: Props) => {
  const [editDialog, setEditDialog] = useState(false);
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Item sx={{ m: 0.5 }}>
        <Card sx={{ minWidth: 275, minHeight: 225 }}>
          <CardContent sx={{ minHeight: 150 }}>
            <Typography variant={"h5"}>{task.name}</Typography>
            <Typography variant={"h5"}>
              {task.done ? "Done" : "Not done"}
            </Typography>
          </CardContent>

          <CardActions style={style}>
            <TaskCardButtons
              key={task.id}
              task={task}
              editDialog={editDialog}
              setEditDialog={setEditDialog}
              // editText={editText}
              // setEditText={setEditText}
              // editBox={editBox}
              // setEditBox={setEditBox}
            />
          </CardActions>
        </Card>
      </Item>
      <EditDialog
        key={task.id}
        task={task}
        editDialog={editDialog}
        setEditDialog={setEditDialog}
      />
    </Grid>
  );
};

export default TaskCard;
