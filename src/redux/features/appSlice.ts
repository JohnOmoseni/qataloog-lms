import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type StateProp = {
  openMenu: boolean;
  screenSize: number;
  isAuthenticated: boolean;
  isNetwork: boolean;
  filters: string;
};

const initialAppState: StateProp = {
  openMenu: false,
  screenSize: 0,
  isAuthenticated: true,
  isNetwork: true,
  filters: "",
};

const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    setOpenMenu: (state, action: PayloadAction<boolean>) => {
      state.openMenu = action.payload;
    },
    setScreenSize: (state, action: PayloadAction<number>) => {
      state.screenSize = action.payload;
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setNetwork: (state, { payload }) => {
      state.isNetwork = payload;
    },
    setFilters: (state, { payload }) => {
      state.filters = payload;
    },
  },
});

export default appSlice.reducer;
export const {
  setScreenSize,
  setOpenMenu,
  setIsAuthenticated,
  setNetwork,
  setFilters,
} = appSlice.actions;
