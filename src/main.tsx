import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./route/index.tsx";
import store from "./redux/store.ts";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
