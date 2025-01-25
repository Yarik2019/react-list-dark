import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/fonts.css";
import "./styles/theme.css";
import App from "./App.jsx";
import ThemeProvider from "./contexts/ThemeProvider.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading="null" persistor={persistor}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
