import "./App.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  );
}

export default App;
