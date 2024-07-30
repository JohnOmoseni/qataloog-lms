import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import AppStateReducer from "./features/appSlice";
import storage from "redux-persist/lib/storage";

const appStateConfig = {
  key: "app",
  storage: storage,
};

const rootReducer = combineReducers({
  appState: persistReducer(appStateConfig, AppStateReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
