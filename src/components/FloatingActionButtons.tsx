import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";

interface Props {
  taskDialog: boolean;
  setTaskDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const FloatingActionButtons = ({ taskDialog, setTaskDialog }: Props) => {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
        margin: 0,
        top: "auto",
        right: 20,
        bottom: 20,
        left: "auto",
        position: "fixed",
      }}
    >
      <Tooltip title="Add task">
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => {
            setTaskDialog(!taskDialog);
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      {/* <Tooltip title="Filter tasks"> */}
      {/* {filterText.length === 0 ? (
          <Fab
            aria-label="filter"
            onClick={() => {
              setFilterDialog(true);
              console.log("clicked");
            }}
          >
            <FilterAltIcon />
          </Fab>
        ) : (
          <Fab
            aria-label="clear-filter"
            onClick={() => {
              setFilterText("");
              console.log("clicked");
            }}
          >
            <FilterAltOffIcon />
          </Fab>
        )} */}
      {/* </Tooltip> */}
    </Box>
  );
};

export default FloatingActionButtons;
