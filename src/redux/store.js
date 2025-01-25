import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { usersReducer } from "./users/slice";
import { filterReducer } from "./filters/slice";
const filtersPersistConfig = {
  key: "filters",
  version: 1,
  storage,
  whitelist: ["name", "sortKey", "sortOrder"],
};
export const store = configureStore({
  reducer: {
    users: usersReducer,
    filters: persistReducer(filtersPersistConfig, filterReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
