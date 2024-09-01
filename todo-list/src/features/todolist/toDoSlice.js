import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
  },
  reducers: {
    add: (state, action) => {
      state.data.push(action.payload);
    },
    remove: (state, action) => {
      state.data.splice(action.payload, 1);
    },
    update: (state, action) => {
      state.data.forEach((x, index) => {
        if (action.payload.keyId === index) {
          x.description = action.payload.description
        }
      })
    },
    checkTask: (state, action) => {
      state.data.forEach((x, index) => {
        if (action.payload === index) {
            x.status ? x.status = false : x.status = true
        }
      })
    }
  },
});

export const { add, remove, update, checkTask } = toDoSlice.actions;
export default toDoSlice.reducer;
