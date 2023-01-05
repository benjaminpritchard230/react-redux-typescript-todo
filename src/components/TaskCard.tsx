import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
// import TaskCardButtons from "./TaskCardButtons";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { edit } from "../features/taskList/taskListSlice";
import { Task } from "../features/taskList/taskListSlice";
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
              // editDialog={editDialog}
              // setEditDialog={setEditDialog}
              // editText={editText}
              // setEditText={setEditText}
              // editBox={editBox}
              // setEditBox={setEditBox}
            />
          </CardActions>
        </Card>
      </Item>
    </Grid>
  );
};

export default TaskCard;
