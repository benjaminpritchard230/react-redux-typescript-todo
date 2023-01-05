import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { clear, doneDelete, save } from "../features/taskList/taskListSlice";

interface Props {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const TopAppBar = ({ theme, setTheme }: Props) => {
  const taskList = useSelector((state: RootState) => state.taskList.value);
  const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React To-do App
          </Typography>
          {theme === "dark" ? (
            <IconButton
              onClick={() => {
                setTheme("light");
              }}
            >
              <Brightness7Icon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setTheme("dark");
              }}
            >
              <Brightness4Icon />
            </IconButton>
          )}

          {/* <Button
        onClick={() => {
          handleDeleteDoneClick();
        }}
        color="inherit"
      >
        Delete Done
      </Button> */}
          {/* <Button
        onClick={() => {
          dispatch(clear());
        }}
        color="inherit"
      >
        Delete all
      </Button> */}
          {/* <Button
        onClick={() => {
          dispatch(
            save({
              name: randomString(10),
              id: id,
              done: false,
            })
          );
          console.log(taskList);
        }}
        color="inherit"
      >
        Create task
      </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopAppBar;
