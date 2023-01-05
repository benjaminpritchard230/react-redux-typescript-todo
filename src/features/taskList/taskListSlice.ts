import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  name: string;
  id: string;
  done: boolean;
}

export interface TaskState {
  value: Task[];
}

const initialState: TaskState = {
  value: [
    {
      name: "ben",
      id: "123",
      done: true,
    },
    {
      name: "harry",
      id: "456",
      done: false,
    },
  ],
};

export const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    save: (state, action: PayloadAction<Task>) => {
      const { payload } = action;
      state.value = [...state.value, payload];
    },
    done: (state, action: PayloadAction<Task>) => {
      const { payload } = action;
      const index = state.value.findIndex((task) => task.id === payload.id);
      const newArray = [...state.value];
      newArray[index].done = !newArray[index].done;
      state.value = newArray;
    },
    edit: (state, action: PayloadAction<Task>) => {
      const { payload } = action;
      const index = state.value.findIndex((task) => task.id === payload.id);
      const newArray = [...state.value];
      newArray[index].name = payload.name;
      state.value = newArray;
    },
    remove: (state, action: PayloadAction<Task>) => {
      const { payload } = action;
      const index = state.value.findIndex((task) => task.id === payload.id);
      let newArray = [...state.value];

      newArray.splice(index, 1);
      state.value = newArray;
    },
    clear: (state) => {
      state.value = [];
    },
    doneDelete: (state, action) => {
      const { payload } = action;

      state.value = payload;
    },
  },
});

export const { save, clear, done, remove, doneDelete, edit } =
  taskListSlice.actions;
export default taskListSlice.reducer;
