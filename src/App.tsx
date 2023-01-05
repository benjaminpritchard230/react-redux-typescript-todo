import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// import FloatingActionButtons from "./components/FloatingActionButtons";
import Grid from "@mui/material/Grid";
import { RootState } from "./app/store";
// import TaskCard from "./components/TaskCard";
import TaskDialog from "./components/TaskDialog";
// import TopAppBar from "./components/TopAppBar";
// import FilterDialog from "./components/FilterDialog";
import TaskCard from "./components/TaskCard";
import TopAppBar from "./components/TopAppBar";
import FloatingActionButtons from "./components/FloatingActionButtons";

type Props = {};

const App = (props: Props) => {
  const lightTheme = createTheme({
    palette: {
      primary: {
        main: "#0057b7",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const [theme, setTheme] = useState("light");
  const [taskDialog, setTaskDialog] = useState(false);

  const taskList = useSelector((state: RootState) => state.taskList.value);

  const displayTaskCards = () => {
    return taskList.map((task) => (
      <TaskCard
        task={task}
        key={task.id}
        // editDialog={editDialog}
        // setEditDialog={setEditDialog}
      />
    ));
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minWidth: 1 }} key="1">
        <Grid container spacing={0}>
          <TopAppBar theme={theme} setTheme={setTheme} />
          <Grid item xs={12}></Grid>
          {displayTaskCards()}
        </Grid>
      </Box>
      <FloatingActionButtons
        taskDialog={taskDialog}
        setTaskDialog={setTaskDialog}
        // filterDialog={filterDialog}
        // setFilterDialog={setFilterDialog}
        // filterText={filterText}
        // setFilterText={setFilterText}
      />
      <TaskDialog taskDialog={taskDialog} setTaskDialog={setTaskDialog} />
      {/* <FilterDialog
        filterDialog={filterDialog}
        setFilterDialog={setFilterDialog}
        filterText={filterText}
        setFilterText={setFilterText}
      /> */}
    </ThemeProvider>
  );
};

export default App;
